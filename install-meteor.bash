#Read file from '.meteor/release' and put the infor from it to the MYVAR variable 
read -r MYVAR<'.meteor/release'
#Take everything after the '@' sign from the MYVAR variable and assign it to `release`
release=${MYVAR##*@}
echo $release
#Install the proper meteor version
curl https://install.meteor.com/\?release\=${release} | sh