[cmdletbinding()]
param(
    [Parameter(Mandatory = $true)] [string]$Pack = "BabySprint1Test",
    [Parameter(Mandatory = $false)] [string]$BuildNo = "",
    [switch]$Export
)

$packPath = ".\pack\$Pack"

if (Test-Path $packPath) {
    ls "$packPath\*.json" -File | foreach {
        $args = gc $_ | ConvertFrom-JSON        
        $Name = "$($_.BaseName)$($BuildNo ? '_' + $BuildNo : '')"
        $args | ft
        $Name

        & ".\genlog.ps1" $Name $args.Midi $args.Set $args.Audio $args.SvgPack $args.SvgApplyPath $args.SvgPath $args.Consts $Export.IsPresent 
    }
} else {
    "No Package Found!"
}

