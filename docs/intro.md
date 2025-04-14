---
sidebar_position: 2
---

# Intro

SRL (Simple Reporting Library) is a [Vue3](https://vuejs.org/) based Project with a Library of predefined Livingdocs components and is used as a quick configurable Template.

## Goal of this Library

The Goal is to have a ready to use, simple and easy extendable entrypoint, for online reports and PDF outputs.
The online report itself should be as static as possible as the content shouldn't change after going public. 

> There are country specific regulations that an annual report has to be online and accessible for the next N Years.
>
> Which creates a problem when a Customer expects the online report to look exactly the same after 10years of (e.g) Wordpress updates


## Structure overview 

A online report splits into 3 parts:

1. Livingdocs Design -> A configurable Editor design which allows ease of use and rich text editing.
2. Web application -> A Web project to view article content.
3. CSS styles for other media outputs (PDF, Word)

## Where does data come from, where does it go?

All article data and article specific metadata comes from the ns.wow Editor. A user creates the article, fills the content and decides if the article is published to web and/or PDF. 

A published web article is then sent to the ns.wow Hosting for preview and final product export.  

Tables which are uploaded via Finance Plus (FP) are retrieved inside the editor and rendered to HTML. Table references from the [`nswow-table`](https://github.com/mmssolutionsio/simple-reporting-library/blob/main/livingdocs/Media/nswow-table/nswow-table.html) component do update automatically in the preview and do not require another publish.

PDF / Word pulls the the newest revision of an article and uses it during the build.

![nswow dataflow](/img/data-flow-nswow.png)

## ns.wow (Editor)

The `Single Source of Truth` for content. A Customer or an assigned Project Leader (PL) works in the editor and fills content, or changes display properties for the output. 

ns.wow is not WYSIWYG for multiple reasons:
- there are multiple target Medias which are generated from the same content
- theres no way to make a WYSIWYG Editor for PDF content without writing a custom implementation and a custom PDF rendering implementation.
- Endusers often don't know that the OS monitor zoom on their laptop changes the scaling a lot, and content might suddenly look different when viewed on their colleagues screen. 


`A Developer` sets up a Livingdocs design and Styles for the editor components for the enduser. Creates new components or adds properties to allow the enduser better workflow / control over the product.

Someone from `Finances` or enduser uses Finance Plus to upload tables and table styles into the publication to use in articles. 

## ns.wow (Hosting)

The hosting serves a preview of the Web app, exporting a [report package](./nswow-hosting/export-structure.md) and allows additional configuration of menus and download artifacts.

The data of a report package can be used to locally develop and preview the web app without always having to deploy a new version.


## Livingdocs Design

> Livingdocs is a modern Digital Content Creation and Publishing System that drives the efficiency of editorial staff using a unique building blocks technology and powerful collaboration tools.

The Design consists of various content and layout components that have established themselves in online reports over the years. 

1. `Titles` -> Headings H1 - H6
2. `Text` -> Paragraph, Lead
3. `Lists` -> ol, ul, Arabic numral, Alpha numeral
4. `Media` -> Video, Images, Charts (e.g Highcharts)

Special for Reports:

5. `CV (curriculum vitae)` -> components to display short CVs 
6. `Signatures` -> mostly used for "Letter to Shareholders"

Special for PDF Media:

7. `PDF only` -> Page Headers, Cover Pages, and things that should ever only land in the PDF and not in the online report 

## Web application

The Web application loads static JSON structures and HTML fragments to Display the whole Report. The Data Provided are existing `articles`, `menu structures` and `download artifacts`. 

## PDF 

A PDF with all articles and their structure provided by the Editor. 

```bash
publication
├── Chapter # Publication specific
  ├── Article # Ordered by name
    ├── Raw Article HTML
```

## Resources

- [Hosting Export structure](./nswow-hosting/export-structure) for more indepth information about exported files
- [CSS - Framework](./beaver/beaver-config) 