param($ext = "wav"); dir *.$ext | % { $_.Name; "-" * $_.Name.Length; ffprobe $_.Name 2>&1 | sls Duration: -Context 0, 1 }
