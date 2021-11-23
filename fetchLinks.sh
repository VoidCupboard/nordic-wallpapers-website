#!/usr/bin/bash

export URL='https://api.github.com/repos/linuxdotexe/nordic-wallpapers/contents/wallpapers'

curl $URL | jq '.[] | .download_url' > data.js

sed -i 's/$/,/' data.js

sed -i '1 i export const walps = [' data.js

echo ] >> data.js