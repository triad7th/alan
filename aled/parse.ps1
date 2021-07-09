[cmdletbinding()]
param(
    [parameter(
        Mandatory         = $false,
        ValueFromPipeline = $true)]
    $itemlist = '.\library\images\pj-animal1.json',
    $scenepath = '..\alan\sets\ff\scene\hand\family\',
    $svgpath = '.\library\svgs\'
)

# using HTMLFile service
if($html) {
  Remove-Variable html
}
$html = New-Object -Com "HTMLFile"
$BASE_WIDTH = 800
$BASE_HEIGHT = 800
$BASE_LEFT = 400
$BASE_TOP = 400

"Set Update(SVG)"
"-" * "Set Update(SVG)".Length
"package: $((gi $itemlist).FullName)"
"scenepath: $((gi $scenepath).FullName)"
"svgPath: $((gi $svgpath).FullName)"

function main()
{
  $basepath = (gi $itemlist).PSParentPath
  $pack = @()
  
  ((Get-Content $itemlist) | ConvertFrom-Json).PSObject.Properties | ForEach-Object {
    # get width, height from  {name}.json
    $info = (Get-Content "$($scenepath)$($_.Name)\$($_.Name).json") | ConvertFrom-Json
    $json = (Get-Content ("$basepath\$($_.Value).json")) | ConvertFrom-Json
    $item = @{
      character = $_.Name
      name = $_.Value      
      info = $info
      json = $json
      # get w, h from dad.json and make mx, my, mw, mh by w/512, h/512, w/512, h/512
      scale = @{
        x = $info.w / $BASE_WIDTH
        y = $info.h / $BASE_HEIGHT
        w = $info.w / $BASE_WIDTH
        h = $info.h / $BASE_HEIGHT
      }      
    }
    $pack += parse $item
    $path = "$($scenepath)$($item.character)\"
    # [bg]
    # overwrite dad.svg using $p[0].bg.outerHTML
    $item.bg.outerHTML | Out-File "$($path)$($item.character).svg" -Force -Verbose | Out-Null

    @("eyel", "eyer") | ForEach-Object {
      if ($item[$_]) {
        addSvg $path $_ $item | Out-Null        
      } else {
        removeSvg $path $_ $item
      }  
    }    
  }
}
function removeSvg($path, $type, $item)
{
  $name = "$($item.character)_$type"
  if (Test-Path "$($path)$($name)") {
    Remove-Item "$($path)$($name)" -Force -Recurse -Verbose
  }
}
function addSvg($path, $type, $item)
{
  # set constant
  $name = "$($item.character)_$type"
  $svgInfo = $item[$type].svgInfo
  $scaledInfo = $item[$type].scaledInfo

  # create a folder dad_eyel
  mkdir "$($path)$($name)" -Force -Verbose
  # create a svg file dad_eyel.svg using eyel.js from 'svgInfo.src'
  $svgInfo.src | Out-File "$($path)$($name)\$name.svg" -Force -Verbose

  # create a json file dad_eyel.json using eyel.js from aled svgs folder    
  #  getting type from 'svgInfo.type'
  #  getting x,y,w,h from 'scaledInfo'
  #  set src as 'dad_eyel.svg'
  #  getting act from 'svgInfo.act'
  #  set class as 'fit'
  $svgInfo | Add-Member "x" ($scaledInfo.left)
  $svgInfo | Add-Member "y" ($scaledInfo.top)
  $svgInfo | Add-Member "w" ($scaledInfo.width)
  $svgInfo | Add-Member "h" ($scaledInfo.height)
  $svgInfo.src = "$name.svg"
  $svgInfo | Add-Member "class" "fit"
  $svgInfo | ConvertTo-Json | Out-File "$($path)$($name)\$name.json" -Force
}

function getSvg($type, $className, $item)
{
  $dom = $html.querySelector($className)
  if ($dom) {
    $scale = $item.scale
    $svg = "$($svgpath)$type.js"
    # get style top
    $top = $null
    if ($dom.style.top) {
      $top = [float]($dom.style.top -replace ("(-?\d+)px", '$1'))
      $dom.style.removeAttribute('top')
    }
    # get style left
    $left = $null
    if ($dom.style.left) {
      $left = [float]($dom.style.left -replace ("(-?\d+)px", '$1'))
      $dom.style.removeAttribute('left')
    }
    # get attr height
    $height = $null
    if ($dom.hasAttribute('height')) {
      $height = [float]($dom.getAttribute('height'))
      $dom.removeAttribute('height')
    }
    # get attr width
    $width = $null
    if ($dom.hasAttribute('width')) {
      $width = [float]($dom.getAttribute('width'))
      $dom.removeAttribute('width')
    }
    
    # remove id
    $dom.removeAttribute('id') | Out-Null
    # remove xml namespace
    $outerHTML = [Regex]::Replace(
      $dom.outerHTML,
      "<\?XML:NAMESPACE.+?\/>",
      "",
      [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    # add double quotation for class
    $outerHTML = [Regex]::Replace(
      $outerHTML,
      "\sclass=([\d\w]+)\s",
      ' class="$1" ')
  
    # get svg info
    return @{
      'dom' = $dom
      'outerHTML' = $outerHTML
      'baseInfo' = @{
        'top' = $top
        'left' = $left
        'height' = $height
        'width' = $width
      }
      'scaledInfo' = @{
        'top' = ($top + $BASE_TOP) * $scale.x + ($height * $scale.h) / 2
        'left' = ($left + $BASE_LEFT) * $scale.y + ($width * $scale.w) / 2
        'height' = $height * $scale.h
        'width' = $width * $scale.w
      }
      'svgInfo' = (Test-Path $svg) ? (& {
        $arr = gc $svg
        $arr[0] = '{'
        $arr | ConvertFrom-Json
      }) : $null
    }
  } else {
    return $null
  }  
}
function parse($item)
{  
  $html = New-Object -Com "HTMLFile"
  $html.write([System.Text.Encoding]::Unicode.GetBytes($item.json.dom))  
  $item.Add('bg', (getSvg 'bg' '.canvas-item' $item))
  $item.Add('eyel', (getSvg 'eyel' '.brush-item.cls-eyel' $item))
  $item.Add('eyer', (getSvg 'eyer' '.brush-item.cls-eyer' $item))
  if($html) { 
    Remove-Variable 'html'
  }
  return $item
}

main
