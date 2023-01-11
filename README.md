<p  align="center">
  <img src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" width="170" height="150"/>
</p>

# First-Docker-Project

---

# Index
- [Intro](#Intro)
- [Requisites](#Requisites)
- [Building your own image](#Building-your-own-image)
- [Running the image](#Running-the-image)


# Intro
This is a basic node API with TypeScript that returns a simple message and don't executes any operation, but I used Docker in this project infrastucture.

# Requisites
To run this repository, everything that you'll need is the latest version of Docker installed in your computer. [Click here](https://docs.docker.com/engine/install/) to see how to install Docker in your machine.

# Building your own image
To build your own image using the Dockerfile, you'll have to execute the following command:

```bash
docker build . -t <your username>/first-node-web-app
```

Or just add the following block of code:

```docker
ADD file:54d60144d251caa916ff50606bc2364131d47d6b10ed83d08c81c647ab56cc40 in / 
```
# Running the image 
To run the image, all that you'll need is run the following command:

```bash
docker run -p 8080:8080 -d <your username>/first-node-web-app
```

And now, it's just access [http://localhost:8080](http://localhost:8080) and the project should be running in your machine!
