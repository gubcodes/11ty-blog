---
title: "How I Built and Published This Blog"
byline: "Embracing Static Site Generation"
date: "2021-03-23"
tags:
- "how i did it"
- "github"
- "netlify"
- "11ty"
- "ssg"
- "lighthouse"
---
# The short version
1. Cloned [this excellent template](https://github.com/kohrongying/11ty-blog-starter)
2. Created a [GitHub repository](https://github.com/gubcodes/11ty-blog)
3. Connected that respository to [Netlify](https://www.netlify.com/)

# The much longer version
A couple of weeks ago, one of my [EFA](https://elevenfifty.org/) mentors, [Brandon](https://bsteph.com/), gave me a brief introduction to SSGs, particularly [11ty](https://11ty.dev). I was brand new to the concept but was immediately drawn to it, seeing it as a logical tool to aid in my journey to build performant and accessible websites. I am honestly not qualified to explain how 11ty works in detail, *it is basically just magic* to me at this point. But I will try to do a simple walkthrough of how I was able to get this blog up-and-running. I will also add a few small tips to increase the performance so that you receive perfect [Lighthouse](https://developers.google.com/web/tools/lighthouse) scores like this one you are reading.

## The template
I came across [this excellent template](https://github.com/kohrongying/11ty-blog-starter). 11ty has many [Starter Projects](https://www.11ty.dev/docs/starter/) including an [Official Base Blog](https://github.com/11ty/eleventy-base-blog), so why did I choose this one instead?
- [tailwind CSS](https://tailwindcss.com/) already built-in (including dark mode)
- [Liquid](https://shopify.github.io/liquid/basics/introduction/)-based templating
- sorting by tags
- pagination
- already set up for Netlify

As I said, I was a complete beginner, so having a few of my wishlist items already included was a huge bonus. Much of the information here will apply to any starter template.

Once I was on the chosen template's GitHub repository page, I clicked the big, green **Use this template** button. I named it "11ty Blog," left the visibility set to Public, and clicked the big, green **Create repository from this template** button.

## The repository
Once I had a clone of the template in my own repository, I could have immediately deployed it to Netlify, and it would have looked exactly like this [demo](https://eleventy.rongying.co/).

But I wanted to start diving in to make it my own. I cloned the code by clicking the big, green **Code** button on my repository page and copying the HTTPS address by clicking on the clipboard. I then opened my terminal, navigated to the appropriate folder (wherever you would want your code), and put in the following commands (the address will be what you copied):

```
git init
git clone https://github.com/yourusername/11ty-blog.git
```

Now you can navigate to the 11ty-blog folder and edit your project's code. I will have more notes on how to create your first blog post as well as some recommended changes after we cover deployment.

## Deploying with Netlify
Back in my browser, I navigated to [Netlify](https://www.netlify.com/). I clicked **Sign up** and used the GitHub account option.

Then I clicked on the **New site from Git** (which may not be there if you signed up with a different option). From there, I followed the easy-to-use prompts to tether my "11ty-blog" GitHub repository to Netlify. The build took a minute or two, then it registered as "Completed." I changed my URL by clicking on the grey **Domain settings** button. I used the **Options** dropdown to change my site name (*sitename*.netlify.app). You can also set up a custom domain.

My blog is now published, and *Netlify will automatically re-build and deploy* whenever I push changes from my local 11ty-blog project folder to the master branch of my GitHub repository**.

*Note: Alternatively, you can choose to not connect your GitHub repository and use the drag-and-drop method to have Netlify build and deploy your code. Check out [Netlify's Step-By-Step Guide](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).*

## Adding blog posts

Rong Ying included a really handy feature here with the **create** file.

I started by deleteing all sample posts. This is everything in the **posts** folder *except* posts.json .

Next, I opened Git Bash and navigated to my 11ty-blog project folder. For this post, I executed the following command:

```
./create How I Built and Published This Blog
```
Then I had a markdown file in **posts > 2021 > 03** named **How-I-Built-and-Published-This-Blog[]().md** .

*Note: This is a bash command, so I had to use the Git Bash CLI instead of my usual Powershell.*

## Changes I made to the template
I made (and will continue to make) design changes to my blog. I will not cover these. I just wanted to share how I changed the personal information and also how I increased performance.

### There are three files that I changed the personal information in:
1. about.[]()md - This is in the About page.
2. site.json - This appears throughout the site, including the footer.
3. author.liquid - This is shown at the bottom of each article.

### There are two ways I boosted performance to receive a perfect Lighthouse score:
1. base.liquid

I commented out line 15. Prism is a syntax highlighter for code snippets. I will probably add this back in due to the nature of this blog, but it is unnecessary for anyone not writing about code. 
(*minimal performance increase*)

2. part 1: postcss.config.js

I removed (`./tailwind.config.js`) so that my file now looks like this:
```
module.exports = {
  plugins: [
    require(`tailwindcss`),
    require(`autoprefixer`),
  ],
};
```
part 2: tailwind.config.js

I changed my purge settings so that they now look like this:
```
  purge: {
    enabled: true,
    content: [
    './src/**/*.md',
    './src/**/*.html',
    './src/**/*.liquid'
  ]
},
```
Now all unused CSS classes provided by tailwind will be purged at build time. Now my published blog is less than 100kb total.
(*major performance increase*)

That's it, I think. Maybe next time I'll include pictures...

<!-- excerpt -->