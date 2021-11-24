#!/usr/bin/bash

# Make an env variable for the URL
export URL='https://api.github.com/repos/linuxdotexe/nordic-wallpapers/contents/wallpapers'

# Get the links into the required file
curl $URL | jq '.[] | .download_url' > data.js

# Add a ',' at the end of each line
sed -i 's/$/,/' data.js

# Add line to make the links elements of an array and export them
sed -i '1 i export const walps = [' data.js

# Close the array
echo ] >> data.js

# New script steps:
    # 1. Get original image URL
    # 2. Get resized image URL
    # 3. create an array of objects
    # 4. Export it with a name
    # 5. Create two sub things originalURL and resizedURL
    # 6. Loop through both the URL lists and map them together