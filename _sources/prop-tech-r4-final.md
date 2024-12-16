# PropTech Round 4 Final Report - MHCLG Report 


## One line project title / Cohort:<br>**LBTH Housing Development Tracker**<br>Cohort 3 

## Local Planning Authority/Authorities involved:<br>**London Borough of Tower Hamlets**

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


**LBTH PropTech Round 4 delivery includes-**<br>

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
 
| Supplier | Framework | Timeframe |
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

<ul>
    <li>Data Cleanse</li>
        <ol type="a">
            <li>Designed as week-long sprints with daily end of day huddle sessions. Managed and delivered by core team in planning and building control.</li>
    <li>Product Specifications</li>
            <li>User Research and User Testing:</li>
                <ol type="i">
                    <li>User Research Sessions were run in two phases- initial data discovery that scoped the product data schema and deep delved with teams to understand housing development processes and data flows.
                    The sessions were conducted as focused group discussions, team interviews, and individual interviews. All sessions helped to scope product data schema, map housing processes in the council, and design key requirements of housing tracker.</li>
                    <li>User Testing: from User Research sessions individuals in key teams were requested to review and comment on first dashboard iteration. The sessions were designed as individual interview sessions that keyed in questions on design and functionality, search options, navigation, and general comments. Reviews from user testing sessions were then discussed within core team and GIS analyst to implement into iteration 2 for HDT- the final MVP.</li>
                </ol>
            <li>Dashboard Design: The HDT dashboard has been designed using ESRI GIS dashboard libraries.Delivered in two iterations- initial test version as a result of user research and data cleanse and final after user testing (MVP). Maps and widgets were designed to resonate council team requests to view key housing figures listed by tenure and bedroom size, planning application details, development status, size, and development location.</li>
            <li>Integration into council webpage (implementation for council team view): this was carried out by the web team for LBTH who were requested to add a button leading to the GIS dashboard. The URL address for the same was shared with the team and was quick to setup. This last step made the dashboard available throughout the council for review and feedback.</li>
        </ol>
</ul>


6. Sessions with suppliers  
<ol type="a">
    <li>Workshops with Arup were designed to direct user research and user testing methodologies. Discussions shaped approach to user research, outlined open-ended questions that helped define deliverables for HDT.</li>
    <li>Workshops were designed with Avineon Tensing to produce and deliver the FME report extraction tool and test with automated data extraction. Several meetings were held leading to the workshop that helped design the two-day sprint session to deliver the extraction tool. The final day was spent in understanding the ability of FME to automate data processing from the planning reports using Google Gemini Ai- this session helped guide the future scope for project future.</li>


Approach prior to HDT: Reports were regularly created by extracting data from planning and building control systems to be cleansed, manually checked and corrected, and circulated on a periodic basis and on request.  

<p align="center">
  <a href="./_static/FlowImages/Picture9.png" target="_blank">
    <img src="./_static/FlowImages/Picture9.png" />
  </a>
</p>

Methodology after implementation of HDT: Data is extracted from planning and build control systems to be added into the backend of HDT. Basic reports can be extracted by user using FME extraction tool and live housing development updates are available for all to see in the council. 

<p align="center">
  <a href="./_static/FlowImages/Picture10.png" target="_blank">
    <img src="./_static/FlowImages/Picture10.png" />
  </a>
</p>


## The result
*Please provide a comprehensive summary of your project's achievements, drawing from your 'Round 4 M&E spreadsheet'. Highlight the "before and after" data to clearly demonstrate your project's impact.*<br>
*Include both quantitative and qualitative outcomes, emphasising positive impacts and improvements. Reflect on any lessons learned, new relationships formed, skills developed, or innovative approaches explored.*<br>
*Additionally, take a moment to discuss any challenges faced or aspects that didn’t go as planned, and how these experiences contributed to your overall learning.*<br>
*Consider unexpected positive outcomes and how your project has influenced your organisation and community. Your summary should showcase both measurable results and broader transformative effects, painting a holistic picture of your project's success and learning (min 500 words)*<br>

Round 4 M&E spreadsheet- completed and attached at the end of this report. 

| Description | Quantitative Outcome | Qualitative Outcome |
| ----------- | -------------------- | ------------------- |
| Access to information and time saving | After the completion of HDT all staff/members of the council who have access to the intranet (internal council website) were able to access and interact with the housing tracker. There is no additional product application access and IT approval required for immediate, cleansed reports.<br>Previously, access to PBC system would require a week (maximum) to approve and setup- longer if the product application had to be installed on council desktop by IT. Reports from the system required data cleanse exercise which could require another week (minimum) and further errors in these were plausible.<br>All report requests made to PBC data team require a minimum of a week to share- depending on team’s workload.<br>The time reduced is from a minimum of a two-week exercise to a few minutes. The report extraction tool setup with FME webpage is also easy to interact with and able to provide a cleansed dataset within a few clicks. | Time saving for immediate reports have helped PBC team in charge of data reporting to reorient their work towards development related projects to improve data accuracy and PBC systems.<br>The reduced time for reporting and access to information quickly has also given back more time to council teams to work on other parts of their work loads.<br>There is a unanimous recognition for the project in the council as it has become a resolution to a commonly identified problem. |
| Data Integrity | HDT aims to serve as a one-stop-shop for all development related data- presently focusing on housing.<br>Previously, different teams could request and have access to raw reports from the PBC data management systems that made room for considerable errors at data cleanse stage due to issues such as missed applications.<br>The HDT reduces this greatly- if there is an error (such as a missed application) the error is managed at one point of data cleanse before sharing it with different teams. Removing from the workflow endless email loops requesting corrections to amend the data. | The HDT has improved trust on housing data- both among council teams and senior management.<br>There is a unified recognition among council teams for the improvement in their services. |
| Dashboard design- innovative approaches | Both council teams as well as senior management appreciate the interactive dashboard experience and the simple report extraction tool. The data that is made available in this interactive manner is also impactful as a presentation as all housing figures and site updates are readily available to view. | Accessible dashboard design made housing data available in an impactful manner. The data that was previously stacked away in excel sheets, reports- has been replaced by an online dashboard that is shared as an improvement to previous processes of work. |
| Team interactions- new relationships formed | As a part of the product development process, council teams were brought together for initial data discovery sessions, user research, and user testing. All sessions were carried out with the help of individual interviews and focused group discussions.<br>Outside the direct scope of this project, this led to the Housing Discovery project that mapped all housing processes and data flows in the council and shared it with all teams.<br>The end-to-end map shared with teams provided a whole picture of the housing process carried out by different teams from stages of pre-plan to completion and monitoring. It produced a comprehensive understanding of not only the team workflows, but also the triggers of data and key definitions, associations and work cycles among teams. | Big picture of housing process improved clarity withing team workflows.<br>From working in silos to coming together to understand housing development workflow as a whole helped teams to identify the different definitions, processes related to housing development that are worked on simultaneously in the council. |
| Skills learnt | LPA teams were able to learn new skills including FME training (basic) and improve on python coding skills. Further, new ways of working were developed- such as analysing user research transcripts using LLMs on python and MS-Copilot. | Learning new skills to add to business-as-usual work motivated staff and provided them greater job satisfaction. |

<br>
**Key challenges and lessons learnt:**

1. Procurement processes posed a major challenge to project timeline- there were several project delays that were mitigated with supplier support. Although the delays were not welcome, they added to the overall understanding of the procurement process for PBC Digital and Data team that has been newly formed. The relatively smaller scale procurement for this project also helped to understand how larger projects should or could be navigated through. The work also helped identify key persons and teams to be contacted during procurement processes, delays, and issues. Lastly guiding team to understand procurement frameworks available in the PBC consultation processes for future references. 

2. Data cleanse process: Although LBTH data management systems and planning applications are accurate, the data collected is immense and required much manual checking. For example, a site Wood Wharf has over 3000 approved units in its residential mix that is spread over 500 applications. Several human hours were spent in collating and reorienting this data to match applications to sites for close to 500 sites in the trajectory of LBTH as delivered in the HDT. The extended processes were a result of the way in which the data was captured as opposed to the way in which data is requested. This initial manual cleanse helped to understand and strategize how data added to the system needs to be reoriented and directed the need to build a planning data schema. Additionally, the processes in the manual cleanse also helped to outline the rules and conditions for automating extractions using FME- which is scoped to be explored further in the next stages of the product. 

3. ML Scope: the HDT product had proposed in the funding BID complete machine learning model experimentation. Although, during the project as the planning schema was being identified and iterated on- there has been considerable effort to identify all key variables along with their associated units and appropriate indexing, to understand what a planning schema looks like beyond the application logging and site process. This approach rather than delaying the experimentation process has better defined the planning schema and the extraneous variables affecting housing delivery in the live environment (such as cost of living, interest rate, pandemic, etc). The delay has helped to create a clear and direct approach to experimentation and fed into further scope of the future of the product as well as the LBTH PBC digital and data strategies. 


**Experience and overall learning:**

1. Council data requests require immediate results but resolving and reorienting the data to respond to all requests is a long-term project. The HDT product has helped to identify this common issue and highlight the need for it to be addressed. The project has also helped garner long term commitments towards data integrity and interoperability goals. 

2. Newly formed, the PBC Data Management Team has been able to define the trajectory and strategies for future of LBTH planning data during the implementation of the project. The team has also been able to acquire and train staff on diverse skills in procurement, market analysis, consultation scope, coding that helped to extend the ambit of their business-as-usual work.  


## Other Outputs

*(optional) Have there been any by-products or unexpected results of this funding (this could be connections with other LPAs, universities etc, other teams within your authority interested in the pilot or newfound interests in other parts of digital planning)*

#### Housing Discovery Project 
 
**Overview**
As a part of the housing development tracker user research was conducted to identify and respond to the council’s business needs that helped scope the MVP for the housing development tracker. Teams interviewed helped identify the processes of housing in the council- information triggers, definitions, data flow. This led to the Housing Discovery Project that eventually helped map all housing processes in the council. 

**Teams interviewed:**
<ol>
    <li>Development Management</li>
    <li>Building Control</li> 
    <li>Street Naming and Numbering</li>
    <li>PBC Divisional Support</li>
    <li>Council Tax</li>
    <li>Environment</li>
    <li>Waste</li>
    <li>Capital Delivery</li>
    <li>Land Assessment</li>
    <li>(Affordable) Housing Supply</li>
</ol>

**Methodology**
<ol>
    <li>Focus group discussions</li>
    <li>Team Interviews</li>
</ol>

Members from teams in council that participate in housing related developments directly (from application submission to monitoring after completion) were interviewed in random groups, team clusters, individually. Questions were centred around the team’s BAU process to identify the data that they generate as well as the action that triggers their data. As a result, the team interviews informed the housing data flow processes. The results were recorded through process charts for each team which further branched out to the data the team’s work produced and the key definitions and that their work trigger. 


<p align="center">
  <a href="./_static/FlowImages/Picture11.png" target="_blank">
    <img src="./_static/FlowImages/Picture11.png" />
  </a>
</p> 
 
**User Research Result**<br>
Results overview- BAU process + data diagram<br>
Development journey was mapped from phases of application submission on portal, initial assessment to delivery and monitoring in perpetuity. 


<p align="center">
  <a href="./_static/FlowImages/Picture12.png" target="_blank">
    <img src="./_static/FlowImages/Picture12.png" />
  </a>
</p> 

Teams and process overview then categorised the journey for development in mapped phases and drew up individual process diagrams for each phase, team, process. User Research transcripts were also run through LLMs- scripts have been added to documentation. 
 

<p align="center">
  <a href="./_static/FlowImages/Picture13.png" target="_blank">
    <img src="./_static/FlowImages/Picture13.png" />
  </a>
</p> 

<p align="center">
  <a href="./_static/FlowImages/Picture14.png" target="_blank">
    <img src="./_static/FlowImages/Picture14.png" />
  </a>
</p> 


## Next steps
*Outline any plans or strategies for further applications of these tools or broader adoption. Please offer your views on the scalability of your project or tools and share any plans for further integration in or outside of your council. What have you learned and how are you and your teams going to carry PropTech forward?*

**Next steps:<br>**
Evolving the planning database to forecast development potential with the help of machine learning methodologies. 

**Objectives:**
<ol>
    <li>Building a complete planning database</li>
        <ol type="a">
            <li>Develop a complete planning database schema</li><br>
            At the end of this MVP, the planning data schema has been able to identify and assimilated key housing development variables including tenure, bedroom size, wheelchair accessibility, all application numbers (planning, building control, street naming and numbering), council tax band, EPC grade, key dates (approval, commencement, completion), days taken for development to complete, scale of development, live status of development, and other at unit level. The database conforms to all things within the development and is working on association with things around it that affect its life- including proximity transport, open spaces, amenities, as well as interest rates at time of completion. The aim of the schema is to identify factors intrinsic and extrinsic to a development that affect its life with maximum precision.</li>
            <li>Automating unstructured data extraction process with FME (Feature Manipulation Engine)</li><br>
            FME feature extraction tool was tested during the MVP stage to process an application’s documents (delegated report, section 106, deed of variation) to extract residential information. The results aided team to consider automation processes for future iterations to complete PBC business-as-usual residential data collection requirements as well as planning database development as stated above (a).</li>
        </ol>
    <li>Using machine learning tools to forecast development potential</li><br>During the development of this MVP, a test planning database was created (subset to the planning database schema in 1a) that considered all developments in trajectory to examine effect of factors intrinsic and extrinsic to development that affected days taken to deliver development. The test case looked at factors influencing completed developments (using methods such multi-linear regression; principal component analysis) and built scenarios to test against approved and commenced developments. The future iterations for the project would take these forwards and keep experimenting with other machine learning methods as the planning database is expanded.</li>
</ol>

**Key Outcomes:**
1. Producing a machine learning tool to predict housing development potential.  


**Further Outcomes:**
1.  Transforming data collection, cleansing, and transformation process using FME extraction tool- to automate and cleanse data at source. 

<p align="center">
  <a href="./_static/FlowImages/Picture15.png" target="_blank">
    <img src="./_static/FlowImages/Picture15.png" />
  </a>
</p> 

2. Developing HDT website further to assimilate and share results of housing data flow diagram (in html format)- making available all housing processes, key definitions, triggers of information (data) for all teams in council.


**Scalability and future integration:**
1. Assessing development potential is a universal exercise. The methodology developed by LBTH to identify and implement forecasting tools could be replicated across most high-growth LPAs, particularly those in London.  

2. Additionally, several hours are spent by LPAs on compiling the yearly housing trajectory, starts and completion, and the AMR. Using text automation processes developed by LBTH teams could read through unstructured text to bring together key planning data in a database format. While the FME (feature manipulation extraction) process is not a copy/paste code, other LPAs willing to recreate this would not have to work through initial methodology phases to condition the tool. The council team would as a part of project output create and share basic steps required to implement automation processes for other councils to consider. 


## Pilot related documents 
*(optional)<br>Do you have any documents that you would like to share to supplement your final reports? For example, this could include assets that have been created in this round of funding, like process maps, Mural/Miro boards, job descriptions, scopes of work, internal reports, community feedback or blueprints and guidance for other councils to follow and copy your learnings & process.*

 

LBTH full documentation for HDT: https://elsinlbth.github.io/HDT_Jupyterbook/<br>
LBTH Mural Board Link: [LBTH Mural Board](https://app.mural.co/t/mhclghdt5335/m/mhclghdt5335/1730921590330/e03c9c20664ff99385715ce5798fc6c3fbdafaf0?sender=u08c3bbc8455f542a612a6207)


## Would you change anything 
*(optional)<br>Retrospectively is there anything about this pilot that you would change? This could be utilising a different supplier, securing more internal by in, allowing more time for certain tasks etc.*

LBTH team appreciates the support received to envision, create, and deliver the HDT and would not like to change any part of the process experienced.  

 