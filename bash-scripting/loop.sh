#!/bin/bash
i=1
while [[ $i -le 10 ]]; do
	echo "$i"
	(( i+=1 ))
done

for i in {1..5}
do
	echo $i
done
