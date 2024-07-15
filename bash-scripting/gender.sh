#!/bin/bash

echo "Please enter your name: "
read name

echo "Please select your gender"
echo "1. Male"
echo "2. Female"
echo "3. Others"
read gender
case $gender in 
	1)
		echo "$name,  You are a male ! "
		;;
	2)
		echo "$name, You are a female ! "
		;;
	3)
		echo "$name, You are LGBTQ+ ! "
		;;
	*)
		echo "$name, You're gender is not identified !"
		;;
esac
