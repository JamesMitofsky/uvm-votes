# uvm.vote
every vote counts on UVM campus - not gonna wait to play friendly with drupal, thanks


## Build Highcharts


* [Highcharts > Command Line Rendering](https://www.highcharts.com/docs/export-module/render-charts-serverside)
* [Highcharts > Node Export Server](https://github.com/highcharts/node-export-server)


## Install

```bash
npm install highcharts-export-server -g
```

## Run

```bash
highcharts-export-server -infile charts/voting.json -outfile assets/voting.svg -type svg
```
