#!/bin/bash

echo "Please enter your name: "
read name

echo "1. Male"
echo "2. Female"
echo "3. Others"
echo "Please select your gender: "
read gender
case $gender in 
	1)
		echo -e  "\n$name,  You are a male ! "
		;;
	2)
		echo -e "\n$name, You are a female ! "
		;;
	3)
		echo -e "\n$name, You are LGBTQ+ ! "
		;;
	*)
		echo -e "\n$name, You're gender is not identified !"
		;;
esac
