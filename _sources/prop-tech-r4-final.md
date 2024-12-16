# PropTech Round 4 Final Report - MHCLG Report 


## One line project title / Cohort: 
**LBTH Housing Development Tracker**<br>
Cohort 3 

## Local Planning Authority/Authorities involved:
**London Borough of Tower Hamlets**

## Suppliers and Delivery partners involved in the project
*Who was the supplier and why were they selected? Were they the cheapest / best fit / recommended etc. Did you work with other partners such as universities / charities/local groups?*

| **Partner** | **Description** | **Delivery Component** |
| ----------- | --------------- | -------------------------------------------------- |
| **Arup** | Best fit for project: assessed against | Product Guidance |
| **Avineon Tensing** | Best fit for project: assessed against price, delivery, timeline requested for delivery, accuracy and innovation | FME workflow, FME report extraction page |
| **UCL Graduates** | Best fit for project: assessed against coding skills, willingness to learn and develop new skills, evolve, and innovate | Data extraction, scripting code, Jupyterbook documentation |


## Funding
*Approximately how much of the MHCLG funding was spent internally and how much was spent on your suppliers?*

| **Type**           | **Spend** | **Notes** |
| ------------------ | --------- | ------------------------------------------------------------------------------- |
| **Internal Spend** | £40,000 | Adding internal resources and upskilling with the help of external suppliers/ project consultants. |
| **External Spend** | £45,000 | Consultants aided to develop project direction, deliver key parts of product, and upskill council staff. |



## A brief description of your project 

*Highlight the aim of your project and the solution you developed. Please provide some context as to your motivations for undertaking this pilot. (min 200 words)*
 

London Borough of Tower Hamlets has developed a Housing Development Tracker with the help of ESRI online dashboards. The tracker aimed to develop a web-based monitoring tool to keep a track of developments in London Borough of Tower Hamlets and employ ML (machine learning) to understand future development potential. This tool has brought together the housing trajectory for the borough from 2019 to 2030.   


Objectives- To coalesce, summarise, and make available development information captured by LBTH teams in one place. Build on LBTH internal data repository to ensure robustness, integrity, and completeness of data. Develop a machine learning model to understand the scale of future development. 


LBTH PropTech Round 4 delivery includes- <br>

1. <u>Housing Development Dashboard:</u> the tracker provides an overview of the borough housing trajectory from 2019 to 2030 (483 sites).
    <ul>
        <li>The tracker is designed and developed using ESRI GIS dashboards.<br>
            On this dashboard, the sites and units are classified by: </li>       
            <ul>
                <li>Tenure types: such as market, affordable rent, social rent, intermediate rent, student accommodation, and co-living units.</li>
                <li>Status of site: approved commenced,</li>
                <li>Date of completion, where sites coming forward do not have dates added.</li>
            </ul>
        <li>The database powering the dashboard took close to four months to complete and was brought together using manual system extraction processes from existing databases hosted by Idox as well as human checks of statutory reports.</li>
    </ul>


<p align="center">
  <a href="./_static/FlowImages/Picture1.png" target="_blank">
    <img src="./_static/FlowImages/Picture1.png" />
  </a>
</p>

The user can interact with the site by clicking on the site's directory on the left. Once a site has been clicked on the number of units that have been approved on the site appear in the top boxes (eg: here, Wood Wharf has 143 affordable units). The pop-up window provides the user with additional information including LBTH planning application reference, the site status (approved/ commenced/ completed/ stalled), approval date and financial year, completion date and financial year, number of days to complete. 

<p align="center">
  <a href="./_static/FlowImages/Picture2.png" target="_blank">
    <img src="./_static/FlowImages/Picture2.png" />
  </a>
</p>

If the user wants to access a report to add to their own team workflow or processes a page is setup for the user to login and download the report. The page can be accessed from the link on the right slider. 

<p align="center">
  <a href="./_static/FlowImages/Picture3.png" target="_blank">
    <img src="./_static/FlowImages/Picture3.png" />
  </a>
</p>


2. <u>FME extraction tool for automated reporting (user interface)</u>

Once the user clicks on the link from above, they are led to the reporting tool that is setup- the user needs to request PBC team for login credentials. Once logged in the user can download all site related information from the site in excel format. The report is run according to site status- reports downloaded according to sites approved, commenced, completed, stalled, or all.<br> 
The site has been set up using FME and supported by the same dataset that powers the housing development tracker interface. The report setup has been configured after user research to respond to council team requests and can be reconfigured in the future. 

<p align="center">
  <a href="./_static/FlowImages/Picture4.png" target="_blank">
    <img src="./_static/FlowImages/Picture4.png" />
  </a>
</p>


3. <u>LBTH public facing project page on GitHub</u>

This documentation for this project is developed using JupyterBook and python libraries. Hosted on GitHub, the book is open source and available for everyone to read- this includes all beyond the council. The dashboard hosts the link to the documentation on the right-hand slider as in the image below. Once the user clicks on the link, they will be redirected to the documentation book. 

<p align="center">
  <a href="./_static/FlowImages/Picture5.png" target="_blank">
    <img src="./_static/FlowImages/Picture5.png" />
  </a>
</p>


LBTH full documentation for HDT: https://elsinlbth.github.io/HDT_Jupyterbook/
<p align="center">
  <a href="./_static/FlowImages/Picture6.png" target="_blank">
    <img src="./_static/FlowImages/Picture6.png" />
  </a>
</p>


4. <u>FME test case for unstructured data extraction</u>

FME (Feature Manipulation Engine) tested an extraction case for one of 483 developments in the LBTH trajectory dataset using Gemini Ai to develop a rule-based extraction methodology. The tool helped to condition identification and extraction of accommodation schedule from the planner’s delegated report (a pdf document). For future iterations, this methodology will be developed to extract planning data from statutory documents to build and expand the database. 

<p align="center">
  <a href="./_static/FlowImages/Picture7.png" target="_blank">
    <img src="./_static/FlowImages/Picture7.png" />
  </a>
</p>

5. <u>Machine Learning for future development potential</u>

In stages of discovery, the development tracker MVP has been able to bring together a consolidated housing schema for the London Borough of Tower Hamlets. The council team is building and expanding on this database to develop future scenarios of development.<br>
Accessing the LBTH Development Tracker: the tracker is linked to the council’s intranet server and can be accessed from the featured link section- as in the image below. 


<p align="center">
  <a href="./_static/FlowImages/Picture8.png" target="_blank">
    <img src="./_static/FlowImages/Picture8.png" />
  </a>
</p>
Once the link for *PBC Development Tracker* is clicked, it takes the user to the GIS Dashboard developed by PBC team.  

 
## Supplier onboarding
*Summary of procurement / onboarding / training processes - how long did they take, were there any challenges and how did you overcome these?*
 
| **Supplier** | **Framework** | **Timeframe** |
| ------------ | ------------- | ------------- |
| **Arup** | Architecture + Urbanism Framework | 8 months | 
| **Avineon Tensing** | Direct award: council online tender procurement- Proactis | 6 months |

Onboarding and training: No onboarding and training exercises were required for the suppliers 

Overall challenges: 
<ol>
    <li>Procurement timelines:</li>
        <ol type="a">
            <li>Internal delays: Identifying teams within the council and allocating right resources in legal and procurement teams after the transfer of award funds from MHCLG posed a considerable delay. (one month)</li>
            <li>Identifying and understanding frameworks: after legal teams were allocated to the project, identifying the correct procurement routes for suppliers took close to two months to identify and understand frameworks. Further clarification with teams within PBC regarding project scope that may affect legal terms also posed major setbacks in overall timeline.</li>
            <li>Training: Exchange on contract with the help of internal procurement system for direct award required training of team staff.</li>
            <li>Contracts: Final exchange of contracts required review cycles and were passed among IT, PBC, and legal teams- all clarifications regarding sections postponed supplier start dates.</li>
        </ol>
</ol>


Overcoming challenges- 

<ol>
    <li>Communication with supplier: both supplier teams were informed regarding the internal delays that affected the project timelines. Council teams met with the supplier teams regularly to convey the status of progress, understand the effects of the delay, and design possible next steps that would help to mitigate these delays and not affect the deliverables in any manner.</li>
    <li>Adjusted project timelines to meet delivery requirements: project timelines were adjusted to design sprint sessions that would deliver parts of the project.</li>
        <ol type="a">
            <li>Sessions with Arup: A total of two sprint workshops and several meetings (between 30 mins and an hour) were held around the year to discuss project steps. The two sprint sessions focussed on user research and user testing for the housing development tracker dashboard built by council teams.</li>
            <li>Sessions with Avineon Tensing: a total of three sprint workshops (1 day sessions) and five meetings (an hour) were designed to deliver-</li>
                <ol type="i">
                    <li>FME extraction tool for reporting and</li>
                    <li>FME test case for unstructured data extraction</li>
                </ol>
        </ol>
</ol>


Overall experience: 
<ol>
    <li>Although there were significant delays in the procurement process and onboarding exercise teams were able to mitigate potential risks faced due to consistent, transparent communication with project partners.</li>
    <li>In retrospect, had there been a communication regarding the procurement delays being commonplace it would have been easier for LPA teams to accommodate timelines and project expectations.</li>
</ol>


## The approach
*Describe the process of implementing the project, including any challenges faced or rationale for changes in scope from your initial application. What were the key features of the tools you developed and how did you work with your supplier to determine your user needs for these? (Min 200 words)*

 

The HDT project scope covered: 
<ol>
    <li>To deliver Minimum Viable Product (MVP) for Housing development Tracker (HDT)</li>
    <li>Build a housing trajectory that collates all housing development 2019 onwards</li>
    <li>Create and build a planning data schema for LBTH</li>
    <li>Develop ML methodologies to forecast development potential</li>
    <li>And map next steps to scale and expand the HDT</li>
</ol>

Approach:  

 
Data Cleanse  

Designed as week-long sprints with daily end of day huddle sessions. Managed and delivered by core team in planning and building control. 

 

Product Specifications 

 

User Research and User Testing:  

User Research Sessions were run in two phases- initial data discovery that scoped the product data schema and deep delved with teams to understand housing development processes and data flows.  

The sessions were conducted as focused group discussions, team interviews, and individual interviews. All sessions helped to scope product data schema, map housing processes in the council, and design key requirements of housing tracker. 

 

User Testing: from User Research sessions individuals in key teams were requested to review and comment on first dashboard iteration. The sessions were designed as individual interview sessions that keyed in questions on design and functionality, search options, navigation, and general comments. Reviews from user testing sessions were then discussed within core team and GIS analyst to implement into iteration 2 for HDT- the final MVP. 

 

Dashboard Design: The HDT dashboard has been designed using ESRI GIS dashboard libraries. Delivered in two iterations- initial test version as a result of user research and data cleanse and final after user testing (MVP). Maps and widgets were designed to resonate council team requests to view key housing figures listed by tenure and bedroom size, planning application details, development status, size, and development location. 

Integration into council webpage (implementation for council team view): this was carried out by the web team for LBTH who were requested to add a button leading to the GIS dashboard. The URL address for the same was shared with the team and was quick to setup. This last step made the dashboard available throughout the council for review and feedback.  



## The result

## Further Outputs

(Optional)

## Next steps

## Pilot related documents 

## Changes? 


