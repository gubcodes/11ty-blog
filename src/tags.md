---
layout: default
title: Gubcode
---
<!-- this is the tags page -->

{% for tag in collections.tagList %}

<!-- tag buttons -->
<span>
    <a href="/tags/{{ tag }}"><button class=" dark:bg-gray-600 bg-gray-400 hover:bg-indigo-500 dark:hover:bg-indigo-500  text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-6 mb-4">
        {{ tag }}
    </button>
    </a>
</span>
{% endfor %}
