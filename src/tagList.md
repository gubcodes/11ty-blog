---
layout: default
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag }}/
eleventyComputed:
  title: "{{ tag }}"
---  
<!-- this is the list of articles for a tag -->

{% for post in collections[tag] %}
<div class="py-4 sm:py-10">
  <p>
    <span class="text-2xl sm:text-4xl font-bold hover:text-indigo-500"><a href="{{ post.url }}">{{ post.data.title }}</a></span>
  </p>
  <em>{{ post.date | date: "%Y-%m-%d" }}</em>
  <p class="mt-4">{{ post.data.byline }}... 
    <span class="hover:underline text-indigo-500"><a href="{{ post.url }}">Read this post &rarr;</a></span>
  </p>
</div>
{% endfor %}
