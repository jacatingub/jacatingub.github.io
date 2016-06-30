#!/usr/bin/env bash
# https://www.sitepoint.com/introduction-gulp-js/


# echo " ============ JSHINT building... ============ ";
# gulp jshint;

# echo " ============ IMAGES building... ============ ";
# gulp imagemin;

# echo " ============ CSS building... ============ ";
# gulp styles;

# echo " ============ HTML building... ============ ";
# gulp htmlpage;

# echo " ============ JS building... ============ ";
# gulp scripts;

# echo " +++++++++++++++++++++++++++++++++++++++ ";
# echo "                   END                   ";
# echo " +++++++++++++++++++++++++++++++++++++++ ";

#just run 'gulp' after configuring the gulpfile.js

# echo "or just run 'gulp' after configuring the gulpfile.js..."


if [ ! -d "client/node_modules" ]; then
echo " +++++++++++++++++++++++++++++++++++++++ ";
echo "        NODE MODULES DO NOT EXIST!       ";
echo "       Execute client npm install...     ";
echo " +++++++++++++++++++++++++++++++++++++++ ";
fi


if [ -d "client/node_modules" ]; then
echo " +++++++++++++++++++++++++++++++++++++++ ";
echo "           NODE MODULES DETECTED         ";
echo "              GULP BUILDING              ";
echo " +++++++++++++++++++++++++++++++++++++++ ";
rm -rf build
cd client
gulp
fi