[cmdletbinding()]
param(
  [parameter(
    Mandatory         = $true,
    ValueFromPipeline = $true)]
  $set
)

function main(){
  $root = gi ("$((gi $set).FullName)/scene")
  $root = get $root $null
  load $root
  $json = $root | select name, info, children | ConvertTo-Json -Depth 100
  'export const set = ' + $json | Out-File '.\sequences\set.js'
}

function load($this){
  foreach($item in gci -Directory $this.item){
    $child = get $item $this
    load $child    
    $this.children += $child | select name, info, children
  }
}

function get($item, $parent){
  return @{
    'name' = $item.Name
    'item' = $item
    'url' = url $item
    'info' = info $item $parent
    'parent' = $parent
    'children' = @()
  }
}
function info($item, $parent){
  $info = gc "$($item.FullName)\$($item.Name).json" | ConvertFrom-Json
  $info | Add-Member name $item.Name -Force
  $info | Add-Member parent $parent.name -Force
  switch($info.type){
    'image' {
      if($info.src){ $info.src = url $item $info.src }
    }
    default {}
  }
  return ($info)
}
function url($item, $fn){
  if($fn) { $fn = '/' + $fn.Trim('/\') }
  return (($item.FullName -replace "(.*\\)(sets)", '$2') -replace '\\','/') + $fn  
}


main


