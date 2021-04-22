---
layout: fullPage.njk
---
<a href="/minutes">← Return to Minutes</a>
# {{title}}
{{description}}

<br>
{% if actionItems %}
{%- for item in actionItems -%}
<div class="project-assignment">
<b>Project:</b> {{item.actionItem}}

<b>People:</b> {{item.assignment}}
</div>
{%- endfor -%}
{% endif %}


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