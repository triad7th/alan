[cmdletbinding()]
param(
    [parameter(
        Mandatory         = $false,
        ValueFromPipeline = $true)]
    $item
)

$midi = & 'C:\repos\pyprone\unittest\test_midiconv.py'
$startLine = ($midi | sls 'analyze...').LineNumber
$js = & {'export const sequence ='; $midi[$startLine..($midi.Length - 1)]}
$js | Out-File '.\sequences\ff_type_002.js' -Encoding utf8 -Force