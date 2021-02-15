[cmdletbinding()]
param(
    [Parameter(Mandatory = $true)]
    $Name,
    $Midi = '.\audio\ff_type_003.mid',
    $Set = '.\sets\ff',    
    $Audio = '.\audio\ff_type_001.mp3',
    $SvgPack = '..\aled\library\images\pj-beb.json',
    $SvgApplyPath = '\scene\hand\family',
    $SvgPath = '..\aled\library\svgs',
    $Consts = {},
    [bool]$Export = $false
)

$path = "$((gl).Path)\video\$Name"
$logFile = "$path\$Name.log"

mkdir "$path\$item" -Force | Out-Null

& ".\pwsh\gen.ps1" $Name $Midi $Set $Audio $SvgPack $SvgApplyPath $SvgPath $Consts $Export | tee $logFile