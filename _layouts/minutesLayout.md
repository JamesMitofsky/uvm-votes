---
layout: fullPage.njk
---
<a href="/minutes">← Return to Minutes</a>
# {{title}}
{{description}}

<br>
<br>
Submitted: {{date | readableDate}}

{% assign previousPost = collections.meetingMinutes | getPreviousCollectionItem: page %}
{% assign nextPost = collections.meetingMinutes | getNextCollectionItem: page %}
<div class="post-btn-wrapper">
    {% if previousPost %}<a href="{{ previousPost.url }}">← Previous Post</a>{% endif %}
    {% if nextPost %}<a href="{{ nextPost.url }}">Next Post →</a>{% endif %}
</div>