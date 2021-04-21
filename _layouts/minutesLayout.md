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
<div>
{% if previousPost %}<a href="{{ previousPost.url }}">← Last Week</a>{% endif %}</div>
<div>
{% if nextPost %}<a href="{{ nextPost.url }}">Next Week →</a>{% endif %}</div>
</div>