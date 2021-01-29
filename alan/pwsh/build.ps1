[cmdletbinding()]
param(
    $midi = '.\audio\ff_type_003.mid',
    $set = '.\sets\ff'
)

"Build"
"-" * "Build".Length
"Midi: $midi"
"Set: $set"

$midi | .\pwsh\import-midi.ps1
$set | .\pwsh\import-set.ps1