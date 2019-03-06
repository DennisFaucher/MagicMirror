# Get dawn and dusk times in UTC
curl -s "https://api.sunrise-sunset.org/json?lat=42.399987&lng=-71.437195" | jq '.results.civil_twilight_begin' | sed s/\"//g > /home/dennis/gmt_dawn.txt
curl -s "https://api.sunrise-sunset.org/json?lat=42.399987&lng=-71.437195" | jq '.results.civil_twilight_end' | sed s/\"//g > /home/dennis/gmt_dusk.txt

# Convert Dawn & Dusk times to EST
date +%I:%M" "%p -d "`head -n 1 /home/dennis/gmt_dawn.txt` UTC" > /home/dennis/est_dawn.txt
date +%I:%M" "%p -d "`head -n 1 /home/dennis/gmt_dusk.txt` UTC" > /home/dennis/est_dusk.txt

# Build RSS feed
cat /media/mybook/dennis.xml.head > /media/mybook/dennis.xml
#echo "      <title>`lynx -dump https://www.wunderground.com/weather/us/ma/sudbury/KMASUDBU29 | sed -n '/Updated/{n;n;p}'` `lynx -dump https://www.gaisma.com/en/location/framingham-massachusetts.html | grep Today -m 1 sunrise.txt | awk '{ printf "Dawn: " $5 " " "Dusk: " $6 "\n"}'`</title>" >> /media/mybook/dennis.xml
echo "      <title>Dawn: `head -n 1 /home/dennis/est_dawn.txt` Dusk: `head -n 1 /home/dennis/est_dusk.txt`</title>" >> /media/mybook/dennis.xml
echo "      <pubDate>`date +%a," "%d" "%b" "%Y" "%H:%M:%S" "%Z`</pubDate>" >> /media/mybook/dennis.xml
echo "    </item>" >> /media/mybook/dennis.xml
echo "  </channel>" >> /media/mybook/dennis.xml
echo "</rss>" >> /media/mybook/dennis.xml
