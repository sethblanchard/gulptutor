#GULP

##Intro
Gulp calls itself the streaming build system. Why is streaming important? What is a stream anyways... 

It is probably easiest to think of a stream as a flow of data or the output of most terminal commands. Open your terminal and type:

```
curl -v --silent  https://www.washingtonpost.com
```

You can think of that as a "stream" of a website. Now the reason Gulp emphasizes streams is that you can pipe them together. I know, I know - what is a pipe?

A pipe is a way to combine tasks. A silly but very unixy example is to see which dirs the group has write permissions on:

```
ls -l ~/ | grep '^.....w'
```

The pipe | ties the two commands together and gets you resulting output. These two concepts are used to great effect in Gulp. 

Here are some things we will look at:

1. [Super Basic Gulp Tasks](./Step1/Step1.md) 
2. [Vinyl Streams and Globbing](./Step2/Step2.md)