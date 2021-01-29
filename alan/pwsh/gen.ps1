[cmdletbinding()]
param(
    [Parameter(Mandatory = $true)]
    $Name,
    $Midi = '.\audio\ff_type_003.mid',
    $Set = '.\sets\ff',    
    $Audio = '.\audio\ff_type_001.mp3',
    $SvgPack = '..\aled\Library\images\pj-beb.json',
    $SvgApplyPath = '\scene\hand\family',
    $SvgPath = '..\aled\library\svgs',
    [bool]$Export = $false
)

# const
$Now = Get-Date
# ASCII logo from
# http://patorjk.com/software/taag/#p=testall&f=Efti%20Italic&t=AllyWorld
$LogoPatorjksCheese = @'
      _____    ____         ____       _____      _____  _____                   _____         _____    ____             _____   
  ___|\    \  |    |       |    |     |\    \    /    /||\    \   _____     ____|\    \    ___|\    \  |    |        ___|\    \  
 /    /\    \ |    |       |    |     | \    \  /    / || |    | /    /|   /     /\    \  |    |\    \ |    |       |    |\    \ 
|    |  |    ||    |       |    |     |  \____\/    /  /\/     / |    ||  /     /  \    \ |    | |    ||    |       |    | |    |
|    |__|    ||    |  ____ |    |  ____\ |    /    /  / /     /_  \   \/ |     |    |    ||    |/____/ |    |  ____ |    | |    |
|    .--.    ||    | |    ||    | |    |\|___/    /  / |     // \  \   \ |     |    |    ||    |\    \ |    | |    ||    | |    |
|    |  |    ||    | |    ||    | |    |    /    /  /  |    |/   \ |    ||\     \  /    /||    | |    ||    | |    ||    | |    |
|____|  |____||____|/____/||____|/____/|   /____/  /   |\ ___/\   \|   /|| \_____\/____/ ||____| |____||____|/____/||____|/____/|
|    |  |    ||    |     |||    |     ||  |`    | /    | |   | \______/ | \ |    ||    | /|    | |    ||    |     |||    /    | |
|____|  |____||____|_____|/|____|_____|/  |_____|/      \|___|/\ |    | |  \|____||____|/ |____| |____||____|_____|/|____|____|/ 
  \(      )/    \(    )/     \(    )/        )/            \(   \|____|/      \(    )/      \(     )/    \(    )/     \(    )/   
   '      '      '    '       '    '         '              '      )/          '    '        '     '      '    '       '    '    
                                                                 '                                                             

'@
$LogoGraffiti = @'
   _____  .__  .__          __      __            .__       .___
  /  _  \ |  | |  | ___.__./  \    /  \___________|  |    __| _/
 /  /_\  \|  | |  |<   |  |\   \/\/   /  _ \_  __ \  |   / __ | 
/    |    \  |_|  |_\___  | \        (  <_> )  | \/  |__/ /_/ | 
\____|__  /____/____/ ____|  \__/\  / \____/|__|  |____/\____ | 
        \/          \/            \/                         \/ 
'@

# title
""
$LogoPatorjksCheese
"Movie Generator"
"-" * "Movie Generator".Length
"Run at: $Now"
""

# set
$scenePath = "$Set\$SvgApplyPath\"
& "..\aled\parse.ps1" $SvgPack $scenePath "$SvgPath\"
""

# build
& '.\pwsh\build.ps1' $midi $set
""

if ($Export) {
    # render
    $videoPath = "$((gl).Path)\video\$Name"
    $videoFile = "$videoPath\$Name-video.mp4"
    if(Test-Path $videoFile) {
        "Render"
        "-" * "Render".Length
        "The video file already exists. Skip Video Rendering..."
    } else {
        & ".\pwsh\render.ps1" $Name
    }

    # audio
    ""
    $audioPath = "$((gl).Path)\video\$Name"
    $audioFile = "$audioPath\$Name-audio.mp3"
    $moviePath = "$((gl).Path)\video\$Name"
    $movieFile = "$moviePath\$Name.mp4"
    copy $Audio $audioFile -Force -Verbose
    & ".\pwsh\audio.ps1" $videoFile $audioFile $movieFile
}