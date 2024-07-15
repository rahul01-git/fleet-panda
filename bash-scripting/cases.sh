#!/bin/bash
#

fruit='oranges'

case $fruit in 
	"apple")
		echo "This is a red fruit."
		;;
	"banana")
		echo "This is yellow fruit."
		;;
	"orange")
		echo "This is ornage fruit."
		;;
	*)
		echo "unknown fruit"
		;;
esac
