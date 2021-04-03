## Image info
> ### magick identify -verbose rose.jpg
<br/>

## Convert wav to mp3
> ### ffmpeg -i input.wav -vn -ar 44100 -ac 2 -b:a 192k output.mp3
> ### ffmpeg -i song.mp3 -acodec pcm_f32le -ar 48000 -ac 2 song.wav
<br/>

## Get codec list
> ### ffmpeg -encoders
<br/>

## Merge mp4 files
> ### ffmpeg -f concat -safe 0 -i mylist.txt -c copy output.wav
#### (mylist.txt file)
> #### \# this is a comment
> #### file '/path/to/file1.wav'
> #### file '/path/to/file2.wav'
> #### file '/path/to/file3.wav'