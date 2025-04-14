---
sidebar_position: 2
---

# Intro

SRL (Simple Reporting Library) is a [Vue3](https://vuejs.org/) based Project with a Library of predefined Livingdocs components and is used as a quick configurable Template.

## Goal of this Library

The Goal is to have a ready to use, simple and easy extendable entrypoint, for online reports and PDF outputs.
The online report itself should be as Static as possible as the Content should never change after going public. 

> Theres are country specific regulations that an annual report has to be Online and accessible for the next N Years.
>
> Which creates a problem when a Customer expects the online report to look exactly the same after 10years of (e.g) Wordpress updates


## Structure overview 

The Project splits into 3 Parts of generated Product Data:

1. Livingdocs Design -> A configurable Editor design which allows ease of use and rich text editing.
2. Web Application -> A Web project to View Article Content.
3. CSS Styles for other media outputs (PDF, Word)

## Where does the Data Come from, Where does it go?
> \- Cotton Eye Joe

All Article Data and article specific Metadata comes from the ns.wow Editor. A User creates the Article, fills the content and decides if the article is published to Web and/or PDF. A published Web article is then sent to the ns.wow Hosting for preview and final Product export.  

## ns.wow (Editor)

The `Single Source of Truth` for Content. A Customer or an assigned Project Leader (PL) works in the editor and fills contnet, or changes display properties for the output. 

`A Developer` setups a Livingdocs design and Styles for the editor components for the enduser. Creates new components or adds properties to allow the enduser better workflow / control over the product.

`A Financial Guy` or enduser uses the ns.wow to upload Tables and Table styles into the publication to use in Articles. 

## ns.wow (Hosting)

The hosting serves a preview of the Web App, exporting a [report package](./data-structure/export-structure.md) and allows additional configuration of menus, download artifacts.


## Livingdocs Design

> Livingdocs is a modern Digital Content Creation and Publishing System that drives the efficiency of editorial staff using a unique building blocks technology and powerful collaboration tools.

The Design consists of various content and layout components that have established themselves in online reports over the years. 

1. Titles -> Headings H1 - H6
2. Text -> Paragraph, Lead
3. Lists -> ol, ul, Arabic numral, Alpha numeral
4. Media -> Video, Images, Charts (e.g Highcharts)

Special for Reports:

5. CV (curriculum vitae) -> components to display short CVs 
6. Signatures -> mostly used for "Letter to Shareholders"

Special for PDF Media:

7. PDF only -> Page Headers, Cover Pages, and things that should ever only land in the PDF and not in the online report 

## Web Application

The Web Application loads static JSON structures and HTML fragments to Display the whole Report. The Data Provided are existing `articles`, `menu structures` and `download artifacts`. 

## PDF 

A PDF with all Articles and their structure provided by the Editor. 

```bash
publication
├── Chapter # Publication specific
  ├── Article # Ordered by name
```