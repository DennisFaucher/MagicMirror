# Get latest Rotten Tomatoes DVD Releases
curl -s -o /home/dennis/tomatoes.html https://www.rottentomatoes.com/browse/top-dvd-streaming/ 

# Pull just the movie names and ratings
grep dvdReleaseDate /home/dennis/tomatoes.html | sed 's/]},/},]},\\\n/g' > /home/dennis/movies.txt

#Clean it up
cat /home/dennis/movies.txt | sed 's/"//g' | cut -d ':' -f 3,6 | sed 's/url://g' | cut -d ',' -f 1,2 | sed 's/,/: /g' > /home/dennis/movies2.txt

# Build RSS feed
# Header
cat /media/mybook/tomatoes.xml.head > /media/mybook/tomatoes.xml
# Items
echo "      <title>`sed -n '1p' /home/dennis/movies2.txt`%</title>" >> /media/mybook/tomatoes.xml
echo "      <pubDate>`date +%a," "%d" "%b" "%Y" "%H:%M:%S" "%Z`</pubDate>" >> /media/mybook/tomatoes.xml
echo "    </item>" >> /media/mybook/tomatoes.xml
echo "    <item>" >> /media/mybook/tomatoes.xml
echo "      <title>`sed -n '2p' /home/dennis/movies2.txt`%</title>" >> /media/mybook/tomatoes.xml
echo "      <pubDate>`date +%a," "%d" "%b" "%Y" "%H:%M:%S" "%Z`</pubDate>" >> /media/mybook/tomatoes.xml
echo "    </item>" >> /media/mybook/tomatoes.xml
echo "    <item>" >> /media/mybook/tomatoes.xml
echo "      <title>`sed -n '3p' /home/dennis/movies2.txt`%</title>" >> /media/mybook/tomatoes.xml
echo "      <pubDate>`date +%a," "%d" "%b" "%Y" "%H:%M:%S" "%Z`</pubDate>" >> /media/mybook/tomatoes.xml
echo "    </item>" >> /media/mybook/tomatoes.xml
echo "    <item>" >> /media/mybook/tomatoes.xml
echo "      <title>`sed -n '4p' /home/dennis/movies2.txt`%</title>" >> /media/mybook/tomatoes.xml
echo "      <pubDate>`date +%a," "%d" "%b" "%Y" "%H:%M:%S" "%Z`</pubDate>" >> /media/mybook/tomatoes.xml
echo "    </item>" >> /media/mybook/tomatoes.xml
echo "    <item>" >> /media/mybook/tomatoes.xml
echo "      <title>`sed -n '5p' /home/dennis/movies2.txt`%</title>" >> /media/mybook/tomatoes.xml
echo "      <pubDate>`date +%a," "%d" "%b" "%Y" "%H:%M:%S" "%Z`</pubDate>" >> /media/mybook/tomatoes.xml
echo "    </item>" >> /media/mybook/tomatoes.xml
echo "  </channel>" >> /media/mybook/tomatoes.xml
echo "</rss>" >> /media/mybook/tomatoes.xml
