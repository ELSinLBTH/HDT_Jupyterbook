# Large Langurage Model Task

This report is compiled after meeting with 12 members of council staff belonging to housing teams within the London Borough of Tower Hamlets. LLMs are employed to summarise content and keywords. This notebook primarily explores the use of artificial intelligence and automated processes as an intervention to our user research.

ADD TABLE HERE (llm excel)

## Software

In order to run various models, **Python** is the computer language used in this report. Python's built-in features and packages developed by contributors permit us to run the LLM models with simple lines of code. Before using the code and modules, we prepare initial steps such as download all the required packages and import them onto the Python platform.

## Preparation

### Download Libraries


```python
!pip install bert-extractive-summarizer
!pip install python-docx
!pip install datasets
!pip install sentencepiece
!pip install Rouge

!pip install sentence-transformers
!pip install typing-extensions

!pip install yake
!pip install rake-nltk
!pip install keybert
!pip install summa
```
Collecting bert-extractive-summarizer

```{toggle}
      Downloading bert_extractive_summarizer-0.10.1-py3-none-any.whl (25 kB)
    Collecting transformers
      Downloading transformers-4.46.3-py3-none-any.whl (10.0 MB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m10.0/10.0 MB[0m [31m2.1 MB/s[0m eta [36m0:00:00[0m00:01[0m0:01[0m0m
    [?25hRequirement already satisfied: scikit-learn in /opt/conda/lib/python3.10/site-packages (from bert-extractive-summarizer) (1.1.1)
    Requirement already satisfied: spacy in /opt/conda/lib/python3.10/site-packages (from bert-extractive-summarizer) (3.4.1)
    Requirement already satisfied: joblib>=1.0.0 in /opt/conda/lib/python3.10/site-packages (from scikit-learn->bert-extractive-summarizer) (1.1.0)
    Requirement already satisfied: numpy>=1.17.3 in /opt/conda/lib/python3.10/site-packages (from scikit-learn->bert-extractive-summarizer) (1.23.3)
    Requirement already satisfied: threadpoolctl>=2.0.0 in /opt/conda/lib/python3.10/site-packages (from scikit-learn->bert-extractive-summarizer) (3.1.0)
    Requirement already satisfied: scipy>=1.3.2 in /opt/conda/lib/python3.10/site-packages (from scikit-learn->bert-extractive-summarizer) (1.9.1)
    Requirement already satisfied: pydantic!=1.8,!=1.8.1,<1.10.0,>=1.7.4 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (1.9.2)
    Requirement already satisfied: preshed<3.1.0,>=3.0.2 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (3.0.8)
    Requirement already satisfied: requests<3.0.0,>=2.13.0 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (2.28.1)
    Requirement already satisfied: srsly<3.0.0,>=2.4.3 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (2.4.4)
    Requirement already satisfied: langcodes<4.0.0,>=3.2.0 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (3.3.0)
    Requirement already satisfied: setuptools in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (63.2.0)
    Requirement already satisfied: packaging>=20.0 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (21.3)
    Requirement already satisfied: cymem<2.1.0,>=2.0.2 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (2.0.7)
    Requirement already satisfied: pathy>=0.3.5 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (0.6.2)
    Requirement already satisfied: spacy-legacy<3.1.0,>=3.0.9 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (3.0.10)
    Requirement already satisfied: jinja2 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (3.1.2)
    Requirement already satisfied: typer<0.5.0,>=0.3.0 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (0.4.2)
    Requirement already satisfied: wasabi<1.1.0,>=0.9.1 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (0.10.0)
    Requirement already satisfied: tqdm<5.0.0,>=4.38.0 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (4.64.0)
    Requirement already satisfied: spacy-loggers<2.0.0,>=1.0.0 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (1.0.3)
    Requirement already satisfied: murmurhash<1.1.0,>=0.28.0 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (1.0.9)
    Requirement already satisfied: thinc<8.2.0,>=8.1.0 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (8.1.3)
    Requirement already satisfied: catalogue<2.1.0,>=2.0.6 in /opt/conda/lib/python3.10/site-packages (from spacy->bert-extractive-summarizer) (2.0.8)
    Requirement already satisfied: regex!=2019.12.17 in /opt/conda/lib/python3.10/site-packages (from transformers->bert-extractive-summarizer) (2022.9.13)
    Collecting tokenizers<0.21,>=0.20
      Downloading tokenizers-0.20.3-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (3.0 MB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m3.0/3.0 MB[0m [31m5.8 MB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hRequirement already satisfied: pyyaml>=5.1 in /opt/conda/lib/python3.10/site-packages (from transformers->bert-extractive-summarizer) (6.0)
    Collecting safetensors>=0.4.1
      Downloading safetensors-0.4.5-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (435 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m435.0/435.0 kB[0m [31m7.1 MB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hCollecting filelock
      Downloading filelock-3.16.1-py3-none-any.whl (16 kB)
    Collecting huggingface-hub<1.0,>=0.23.2
      Downloading huggingface_hub-0.26.2-py3-none-any.whl (447 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m447.5/447.5 kB[0m [31m6.5 MB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hRequirement already satisfied: typing-extensions>=3.7.4.3 in /opt/conda/lib/python3.10/site-packages (from huggingface-hub<1.0,>=0.23.2->transformers->bert-extractive-summarizer) (3.10.0.2)
    Collecting fsspec>=2023.5.0
      Downloading fsspec-2024.10.0-py3-none-any.whl (179 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m179.6/179.6 kB[0m [31m10.4 MB/s[0m eta [36m0:00:00[0m
    [?25hRequirement already satisfied: pyparsing!=3.0.5,>=2.0.2 in /opt/conda/lib/python3.10/site-packages (from packaging>=20.0->spacy->bert-extractive-summarizer) (3.0.9)
    Requirement already satisfied: smart-open<6.0.0,>=5.2.1 in /opt/conda/lib/python3.10/site-packages (from pathy>=0.3.5->spacy->bert-extractive-summarizer) (5.2.1)
    Requirement already satisfied: idna<4,>=2.5 in /opt/conda/lib/python3.10/site-packages (from requests<3.0.0,>=2.13.0->spacy->bert-extractive-summarizer) (3.3)
    Requirement already satisfied: charset-normalizer<3,>=2 in /opt/conda/lib/python3.10/site-packages (from requests<3.0.0,>=2.13.0->spacy->bert-extractive-summarizer) (2.1.0)
    Requirement already satisfied: urllib3<1.27,>=1.21.1 in /opt/conda/lib/python3.10/site-packages (from requests<3.0.0,>=2.13.0->spacy->bert-extractive-summarizer) (1.26.10)
    Requirement already satisfied: certifi>=2017.4.17 in /opt/conda/lib/python3.10/site-packages (from requests<3.0.0,>=2.13.0->spacy->bert-extractive-summarizer) (2022.6.15)
    Requirement already satisfied: blis<0.8.0,>=0.7.8 in /opt/conda/lib/python3.10/site-packages (from thinc<8.2.0,>=8.1.0->spacy->bert-extractive-summarizer) (0.7.8)
    Requirement already satisfied: confection<1.0.0,>=0.0.1 in /opt/conda/lib/python3.10/site-packages (from thinc<8.2.0,>=8.1.0->spacy->bert-extractive-summarizer) (0.0.3)
    Requirement already satisfied: click<9.0.0,>=7.1.1 in /opt/conda/lib/python3.10/site-packages (from typer<0.5.0,>=0.3.0->spacy->bert-extractive-summarizer) (8.1.3)
    Requirement already satisfied: MarkupSafe>=2.0 in /opt/conda/lib/python3.10/site-packages (from jinja2->spacy->bert-extractive-summarizer) (2.1.1)
    Installing collected packages: safetensors, fsspec, filelock, huggingface-hub, tokenizers, transformers, bert-extractive-summarizer
      Attempting uninstall: fsspec
        Found existing installation: fsspec 2022.5.0
        Uninstalling fsspec-2022.5.0:
          Successfully uninstalled fsspec-2022.5.0
    Successfully installed bert-extractive-summarizer-0.10.1 filelock-3.16.1 fsspec-2024.10.0 huggingface-hub-0.26.2 safetensors-0.4.5 tokenizers-0.20.3 transformers-4.46.3
    Collecting python-docx
      Downloading python_docx-1.1.2-py3-none-any.whl (244 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m244.3/244.3 kB[0m [31m8.2 MB/s[0m eta [36m0:00:00[0m
    [?25hCollecting typing-extensions>=4.9.0
      Downloading typing_extensions-4.12.2-py3-none-any.whl (37 kB)
    Requirement already satisfied: lxml>=3.1.0 in /opt/conda/lib/python3.10/site-packages (from python-docx) (4.9.1)
    Installing collected packages: typing-extensions, python-docx
      Attempting uninstall: typing-extensions
        Found existing installation: typing-extensions 3.10.0.2
        Uninstalling typing-extensions-3.10.0.2:
          Successfully uninstalled typing-extensions-3.10.0.2
    [31mERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts.
    arviz 0.11.1 requires typing-extensions<4,>=3.7.4.3, but you have typing-extensions 4.12.2 which is incompatible.[0m[31m
    [0mSuccessfully installed python-docx-1.1.2 typing-extensions-4.12.2
    Collecting datasets
      Downloading datasets-3.1.0-py3-none-any.whl (480 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m480.6/480.6 kB[0m [31m7.2 MB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hRequirement already satisfied: dill<0.3.9,>=0.3.0 in /opt/conda/lib/python3.10/site-packages (from datasets) (0.3.5.1)
    Collecting multiprocess<0.70.17
      Downloading multiprocess-0.70.16-py310-none-any.whl (134 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m134.8/134.8 kB[0m [31m9.7 MB/s[0m eta [36m0:00:00[0m
    [?25hRequirement already satisfied: pandas in /opt/conda/lib/python3.10/site-packages (from datasets) (1.4.3)
    Collecting tqdm>=4.66.3
      Downloading tqdm-4.67.0-py3-none-any.whl (78 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m78.6/78.6 kB[0m [31m11.4 MB/s[0m eta [36m0:00:00[0m
    [?25hRequirement already satisfied: pyyaml>=5.1 in /opt/conda/lib/python3.10/site-packages (from datasets) (6.0)
    Collecting aiohttp
      Downloading aiohttp-3.11.4-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.6 MB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m1.6/1.6 MB[0m [31m6.0 MB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hRequirement already satisfied: packaging in /opt/conda/lib/python3.10/site-packages (from datasets) (21.3)
    Collecting xxhash
      Downloading xxhash-3.5.0-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (194 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m194.1/194.1 kB[0m [31m4.2 MB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hCollecting fsspec[http]<=2024.9.0,>=2023.1.0
      Downloading fsspec-2024.9.0-py3-none-any.whl (179 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m179.3/179.3 kB[0m [31m5.7 MB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hRequirement already satisfied: filelock in /opt/conda/lib/python3.10/site-packages (from datasets) (3.16.1)
    Requirement already satisfied: numpy>=1.17 in /opt/conda/lib/python3.10/site-packages (from datasets) (1.23.3)
    Collecting requests>=2.32.2
      Downloading requests-2.32.3-py3-none-any.whl (64 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m64.9/64.9 kB[0m [31m9.8 MB/s[0m eta [36m0:00:00[0m
    [?25hRequirement already satisfied: huggingface-hub>=0.23.0 in /opt/conda/lib/python3.10/site-packages (from datasets) (0.26.2)
    Collecting pyarrow>=15.0.0
      Downloading pyarrow-18.0.0-cp310-cp310-manylinux_2_28_x86_64.whl (40.0 MB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m40.0/40.0 MB[0m [31m6.8 MB/s[0m eta [36m0:00:00[0m00:01[0m00:01[0m
    [?25hRequirement already satisfied: attrs>=17.3.0 in /opt/conda/lib/python3.10/site-packages (from aiohttp->datasets) (21.4.0)
    Collecting frozenlist>=1.1.1
      Downloading frozenlist-1.5.0-cp310-cp310-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_17_x86_64.manylinux2014_x86_64.whl (241 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m241.9/241.9 kB[0m [31m8.6 MB/s[0m eta [36m0:00:00[0m
    [?25hCollecting async-timeout<6.0,>=4.0
      Downloading async_timeout-5.0.1-py3-none-any.whl (6.2 kB)
    Collecting aiosignal>=1.1.2
      Downloading aiosignal-1.3.1-py3-none-any.whl (7.6 kB)
    Collecting aiohappyeyeballs>=2.3.0
      Downloading aiohappyeyeballs-2.4.3-py3-none-any.whl (14 kB)
    Collecting multidict<7.0,>=4.5
      Downloading multidict-6.1.0-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (124 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m124.6/124.6 kB[0m [31m12.4 MB/s[0m eta [36m0:00:00[0m
    [?25hCollecting propcache>=0.2.0
      Downloading propcache-0.2.0-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (208 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m208.9/208.9 kB[0m [31m8.7 MB/s[0m eta [36m0:00:00[0m
    [?25hCollecting yarl<2.0,>=1.17.0
      Downloading yarl-1.17.2-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (319 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m319.2/319.2 kB[0m [31m6.4 MB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hRequirement already satisfied: typing-extensions>=3.7.4.3 in /opt/conda/lib/python3.10/site-packages (from huggingface-hub>=0.23.0->datasets) (4.12.2)
    Collecting dill<0.3.9,>=0.3.0
      Downloading dill-0.3.8-py3-none-any.whl (116 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m116.3/116.3 kB[0m [31m9.2 MB/s[0m eta [36m0:00:00[0m
    [?25hRequirement already satisfied: pyparsing!=3.0.5,>=2.0.2 in /opt/conda/lib/python3.10/site-packages (from packaging->datasets) (3.0.9)
    Requirement already satisfied: idna<4,>=2.5 in /opt/conda/lib/python3.10/site-packages (from requests>=2.32.2->datasets) (3.3)
    Requirement already satisfied: certifi>=2017.4.17 in /opt/conda/lib/python3.10/site-packages (from requests>=2.32.2->datasets) (2022.6.15)
    Requirement already satisfied: charset-normalizer<4,>=2 in /opt/conda/lib/python3.10/site-packages (from requests>=2.32.2->datasets) (2.1.0)
    Requirement already satisfied: urllib3<3,>=1.21.1 in /opt/conda/lib/python3.10/site-packages (from requests>=2.32.2->datasets) (1.26.10)
    Requirement already satisfied: python-dateutil>=2.8.1 in /opt/conda/lib/python3.10/site-packages (from pandas->datasets) (2.8.2)
    Requirement already satisfied: pytz>=2020.1 in /opt/conda/lib/python3.10/site-packages (from pandas->datasets) (2022.1)
    Requirement already satisfied: six>=1.5 in /opt/conda/lib/python3.10/site-packages (from python-dateutil>=2.8.1->pandas->datasets) (1.16.0)
    Installing collected packages: xxhash, tqdm, requests, pyarrow, propcache, multidict, fsspec, frozenlist, dill, async-timeout, aiohappyeyeballs, yarl, multiprocess, aiosignal, aiohttp, datasets
      Attempting uninstall: tqdm
        Found existing installation: tqdm 4.64.0
        Uninstalling tqdm-4.64.0:
          Successfully uninstalled tqdm-4.64.0
      Attempting uninstall: requests
        Found existing installation: requests 2.28.1
        Uninstalling requests-2.28.1:
          Successfully uninstalled requests-2.28.1
      Attempting uninstall: pyarrow
        Found existing installation: pyarrow 9.0.0
        Uninstalling pyarrow-9.0.0:
          Successfully uninstalled pyarrow-9.0.0
      Attempting uninstall: fsspec
        Found existing installation: fsspec 2024.10.0
        Uninstalling fsspec-2024.10.0:
          Successfully uninstalled fsspec-2024.10.0
      Attempting uninstall: dill
        Found existing installation: dill 0.3.5.1
        Uninstalling dill-0.3.5.1:
          Successfully uninstalled dill-0.3.5.1
    [31mERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts.
    pandas-profiling 3.3.0 requires requests<2.29,>=2.24.0, but you have requests 2.32.3 which is incompatible.
    pandas-profiling 3.3.0 requires tqdm<4.65,>=4.48.2, but you have tqdm 4.67.0 which is incompatible.[0m[31m
    [0mSuccessfully installed aiohappyeyeballs-2.4.3 aiohttp-3.11.4 aiosignal-1.3.1 async-timeout-5.0.1 datasets-3.1.0 dill-0.3.8 frozenlist-1.5.0 fsspec-2024.9.0 multidict-6.1.0 multiprocess-0.70.16 propcache-0.2.0 pyarrow-18.0.0 requests-2.32.3 tqdm-4.67.0 xxhash-3.5.0 yarl-1.17.2
    Collecting sentencepiece
      Downloading sentencepiece-0.2.0-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.3 MB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m1.3/1.3 MB[0m [31m5.3 MB/s[0m eta [36m0:00:00[0m00:01[0m00:01[0m
    [?25hInstalling collected packages: sentencepiece
    Successfully installed sentencepiece-0.2.0
    Collecting Rouge
      Downloading rouge-1.0.1-py3-none-any.whl (13 kB)
    Requirement already satisfied: six in /opt/conda/lib/python3.10/site-packages (from Rouge) (1.16.0)
    Installing collected packages: Rouge
    Successfully installed Rouge-1.0.1
    Collecting sentence-transformers
      Downloading sentence_transformers-3.3.1-py3-none-any.whl (268 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m268.8/268.8 kB[0m [31m6.6 MB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hRequirement already satisfied: huggingface-hub>=0.20.0 in /opt/conda/lib/python3.10/site-packages (from sentence-transformers) (0.26.2)
    Requirement already satisfied: torch>=1.11.0 in /opt/conda/lib/python3.10/site-packages (from sentence-transformers) (1.12.1)
    Requirement already satisfied: scipy in /opt/conda/lib/python3.10/site-packages (from sentence-transformers) (1.9.1)
    Requirement already satisfied: Pillow in /opt/conda/lib/python3.10/site-packages (from sentence-transformers) (9.2.0)
    Requirement already satisfied: scikit-learn in /opt/conda/lib/python3.10/site-packages (from sentence-transformers) (1.1.1)
    Requirement already satisfied: transformers<5.0.0,>=4.41.0 in /opt/conda/lib/python3.10/site-packages (from sentence-transformers) (4.46.3)
    Requirement already satisfied: tqdm in /opt/conda/lib/python3.10/site-packages (from sentence-transformers) (4.67.0)
    Requirement already satisfied: requests in /opt/conda/lib/python3.10/site-packages (from huggingface-hub>=0.20.0->sentence-transformers) (2.32.3)
    Requirement already satisfied: pyyaml>=5.1 in /opt/conda/lib/python3.10/site-packages (from huggingface-hub>=0.20.0->sentence-transformers) (6.0)
    Requirement already satisfied: packaging>=20.9 in /opt/conda/lib/python3.10/site-packages (from huggingface-hub>=0.20.0->sentence-transformers) (21.3)
    Requirement already satisfied: typing-extensions>=3.7.4.3 in /opt/conda/lib/python3.10/site-packages (from huggingface-hub>=0.20.0->sentence-transformers) (4.12.2)
    Requirement already satisfied: filelock in /opt/conda/lib/python3.10/site-packages (from huggingface-hub>=0.20.0->sentence-transformers) (3.16.1)
    Requirement already satisfied: fsspec>=2023.5.0 in /opt/conda/lib/python3.10/site-packages (from huggingface-hub>=0.20.0->sentence-transformers) (2024.9.0)
    Requirement already satisfied: regex!=2019.12.17 in /opt/conda/lib/python3.10/site-packages (from transformers<5.0.0,>=4.41.0->sentence-transformers) (2022.9.13)
    Requirement already satisfied: numpy>=1.17 in /opt/conda/lib/python3.10/site-packages (from transformers<5.0.0,>=4.41.0->sentence-transformers) (1.23.3)
    Requirement already satisfied: tokenizers<0.21,>=0.20 in /opt/conda/lib/python3.10/site-packages (from transformers<5.0.0,>=4.41.0->sentence-transformers) (0.20.3)
    Requirement already satisfied: safetensors>=0.4.1 in /opt/conda/lib/python3.10/site-packages (from transformers<5.0.0,>=4.41.0->sentence-transformers) (0.4.5)
    Requirement already satisfied: joblib>=1.0.0 in /opt/conda/lib/python3.10/site-packages (from scikit-learn->sentence-transformers) (1.1.0)
    Requirement already satisfied: threadpoolctl>=2.0.0 in /opt/conda/lib/python3.10/site-packages (from scikit-learn->sentence-transformers) (3.1.0)
    Requirement already satisfied: pyparsing!=3.0.5,>=2.0.2 in /opt/conda/lib/python3.10/site-packages (from packaging>=20.9->huggingface-hub>=0.20.0->sentence-transformers) (3.0.9)
    Requirement already satisfied: urllib3<3,>=1.21.1 in /opt/conda/lib/python3.10/site-packages (from requests->huggingface-hub>=0.20.0->sentence-transformers) (1.26.10)
    Requirement already satisfied: certifi>=2017.4.17 in /opt/conda/lib/python3.10/site-packages (from requests->huggingface-hub>=0.20.0->sentence-transformers) (2022.6.15)
    Requirement already satisfied: charset-normalizer<4,>=2 in /opt/conda/lib/python3.10/site-packages (from requests->huggingface-hub>=0.20.0->sentence-transformers) (2.1.0)
    Requirement already satisfied: idna<4,>=2.5 in /opt/conda/lib/python3.10/site-packages (from requests->huggingface-hub>=0.20.0->sentence-transformers) (3.3)
    Installing collected packages: sentence-transformers
    Successfully installed sentence-transformers-3.3.1
    Requirement already satisfied: typing-extensions in /opt/conda/lib/python3.10/site-packages (4.12.2)
    Collecting yake
      Downloading yake-0.4.8-py2.py3-none-any.whl (60 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m60.2/60.2 kB[0m [31m5.3 MB/s[0m eta [36m0:00:00[0m
    [?25hRequirement already satisfied: networkx in /opt/conda/lib/python3.10/site-packages (from yake) (2.8.7)
    Requirement already satisfied: numpy in /opt/conda/lib/python3.10/site-packages (from yake) (1.23.3)
    Requirement already satisfied: click>=6.0 in /opt/conda/lib/python3.10/site-packages (from yake) (8.1.3)
    Requirement already satisfied: tabulate in /opt/conda/lib/python3.10/site-packages (from yake) (0.9.0)
    Collecting jellyfish
      Downloading jellyfish-1.1.0-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (335 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m336.0/336.0 kB[0m [31m6.7 MB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hCollecting segtok
      Downloading segtok-1.5.11-py3-none-any.whl (24 kB)
    Requirement already satisfied: regex in /opt/conda/lib/python3.10/site-packages (from segtok->yake) (2022.9.13)
    Installing collected packages: segtok, jellyfish, yake
    Successfully installed jellyfish-1.1.0 segtok-1.5.11 yake-0.4.8
    Collecting rake-nltk
      Downloading rake_nltk-1.0.6-py3-none-any.whl (9.1 kB)
    Requirement already satisfied: nltk<4.0.0,>=3.6.2 in /opt/conda/lib/python3.10/site-packages (from rake-nltk) (3.6.7)
    Requirement already satisfied: click in /opt/conda/lib/python3.10/site-packages (from nltk<4.0.0,>=3.6.2->rake-nltk) (8.1.3)
    Requirement already satisfied: regex>=2021.8.3 in /opt/conda/lib/python3.10/site-packages (from nltk<4.0.0,>=3.6.2->rake-nltk) (2022.9.13)
    Requirement already satisfied: joblib in /opt/conda/lib/python3.10/site-packages (from nltk<4.0.0,>=3.6.2->rake-nltk) (1.1.0)
    Requirement already satisfied: tqdm in /opt/conda/lib/python3.10/site-packages (from nltk<4.0.0,>=3.6.2->rake-nltk) (4.67.0)
    Installing collected packages: rake-nltk
    Successfully installed rake-nltk-1.0.6
    Collecting keybert
      Downloading keybert-0.8.5-py3-none-any.whl (37 kB)
    Collecting rich>=10.4.0
      Downloading rich-13.9.4-py3-none-any.whl (242 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m242.4/242.4 kB[0m [31m3.2 MB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hRequirement already satisfied: numpy>=1.18.5 in /opt/conda/lib/python3.10/site-packages (from keybert) (1.23.3)
    Requirement already satisfied: scikit-learn>=0.22.2 in /opt/conda/lib/python3.10/site-packages (from keybert) (1.1.1)
    Requirement already satisfied: sentence-transformers>=0.3.8 in /opt/conda/lib/python3.10/site-packages (from keybert) (3.3.1)
    Requirement already satisfied: typing-extensions<5.0,>=4.0.0 in /opt/conda/lib/python3.10/site-packages (from rich>=10.4.0->keybert) (4.12.2)
    Collecting markdown-it-py>=2.2.0
      Downloading markdown_it_py-3.0.0-py3-none-any.whl (87 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m87.5/87.5 kB[0m [31m16.9 MB/s[0m eta [36m0:00:00[0m
    [?25hCollecting pygments<3.0.0,>=2.13.0
      Downloading pygments-2.18.0-py3-none-any.whl (1.2 MB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m1.2/1.2 MB[0m [31m5.3 MB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hRequirement already satisfied: threadpoolctl>=2.0.0 in /opt/conda/lib/python3.10/site-packages (from scikit-learn>=0.22.2->keybert) (3.1.0)
    Requirement already satisfied: joblib>=1.0.0 in /opt/conda/lib/python3.10/site-packages (from scikit-learn>=0.22.2->keybert) (1.1.0)
    Requirement already satisfied: scipy>=1.3.2 in /opt/conda/lib/python3.10/site-packages (from scikit-learn>=0.22.2->keybert) (1.9.1)
    Requirement already satisfied: transformers<5.0.0,>=4.41.0 in /opt/conda/lib/python3.10/site-packages (from sentence-transformers>=0.3.8->keybert) (4.46.3)
    Requirement already satisfied: tqdm in /opt/conda/lib/python3.10/site-packages (from sentence-transformers>=0.3.8->keybert) (4.67.0)
    Requirement already satisfied: Pillow in /opt/conda/lib/python3.10/site-packages (from sentence-transformers>=0.3.8->keybert) (9.2.0)
    Requirement already satisfied: torch>=1.11.0 in /opt/conda/lib/python3.10/site-packages (from sentence-transformers>=0.3.8->keybert) (1.12.1)
    Requirement already satisfied: huggingface-hub>=0.20.0 in /opt/conda/lib/python3.10/site-packages (from sentence-transformers>=0.3.8->keybert) (0.26.2)
    Requirement already satisfied: pyyaml>=5.1 in /opt/conda/lib/python3.10/site-packages (from huggingface-hub>=0.20.0->sentence-transformers>=0.3.8->keybert) (6.0)
    Requirement already satisfied: filelock in /opt/conda/lib/python3.10/site-packages (from huggingface-hub>=0.20.0->sentence-transformers>=0.3.8->keybert) (3.16.1)
    Requirement already satisfied: packaging>=20.9 in /opt/conda/lib/python3.10/site-packages (from huggingface-hub>=0.20.0->sentence-transformers>=0.3.8->keybert) (21.3)
    Requirement already satisfied: fsspec>=2023.5.0 in /opt/conda/lib/python3.10/site-packages (from huggingface-hub>=0.20.0->sentence-transformers>=0.3.8->keybert) (2024.9.0)
    Requirement already satisfied: requests in /opt/conda/lib/python3.10/site-packages (from huggingface-hub>=0.20.0->sentence-transformers>=0.3.8->keybert) (2.32.3)
    Requirement already satisfied: mdurl~=0.1 in /opt/conda/lib/python3.10/site-packages (from markdown-it-py>=2.2.0->rich>=10.4.0->keybert) (0.1.2)
    Requirement already satisfied: tokenizers<0.21,>=0.20 in /opt/conda/lib/python3.10/site-packages (from transformers<5.0.0,>=4.41.0->sentence-transformers>=0.3.8->keybert) (0.20.3)
    Requirement already satisfied: safetensors>=0.4.1 in /opt/conda/lib/python3.10/site-packages (from transformers<5.0.0,>=4.41.0->sentence-transformers>=0.3.8->keybert) (0.4.5)
    Requirement already satisfied: regex!=2019.12.17 in /opt/conda/lib/python3.10/site-packages (from transformers<5.0.0,>=4.41.0->sentence-transformers>=0.3.8->keybert) (2022.9.13)
    Requirement already satisfied: pyparsing!=3.0.5,>=2.0.2 in /opt/conda/lib/python3.10/site-packages (from packaging>=20.9->huggingface-hub>=0.20.0->sentence-transformers>=0.3.8->keybert) (3.0.9)
    Requirement already satisfied: urllib3<3,>=1.21.1 in /opt/conda/lib/python3.10/site-packages (from requests->huggingface-hub>=0.20.0->sentence-transformers>=0.3.8->keybert) (1.26.10)
    Requirement already satisfied: idna<4,>=2.5 in /opt/conda/lib/python3.10/site-packages (from requests->huggingface-hub>=0.20.0->sentence-transformers>=0.3.8->keybert) (3.3)
    Requirement already satisfied: certifi>=2017.4.17 in /opt/conda/lib/python3.10/site-packages (from requests->huggingface-hub>=0.20.0->sentence-transformers>=0.3.8->keybert) (2022.6.15)
    Requirement already satisfied: charset-normalizer<4,>=2 in /opt/conda/lib/python3.10/site-packages (from requests->huggingface-hub>=0.20.0->sentence-transformers>=0.3.8->keybert) (2.1.0)
    Installing collected packages: pygments, markdown-it-py, rich, keybert
      Attempting uninstall: pygments
        Found existing installation: Pygments 2.12.0
        Uninstalling Pygments-2.12.0:
          Successfully uninstalled Pygments-2.12.0
      Attempting uninstall: markdown-it-py
        Found existing installation: markdown-it-py 2.1.0
        Uninstalling markdown-it-py-2.1.0:
          Successfully uninstalled markdown-it-py-2.1.0
    [31mERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts.
    mdit-py-plugins 0.3.1 requires markdown-it-py<3.0.0,>=1.0.0, but you have markdown-it-py 3.0.0 which is incompatible.
    jupytext 1.14.1 requires markdown-it-py<3.0.0,>=1.0.0, but you have markdown-it-py 3.0.0 which is incompatible.[0m[31m
    [0mSuccessfully installed keybert-0.8.5 markdown-it-py-3.0.0 pygments-2.18.0 rich-13.9.4
    Collecting summa
      Downloading summa-1.2.0.tar.gz (54 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m54.9/54.9 kB[0m [31m9.2 MB/s[0m eta [36m0:00:00[0m
    [?25h  Preparing metadata (setup.py) ... [?25ldone
    [?25hRequirement already satisfied: scipy>=0.19 in /opt/conda/lib/python3.10/site-packages (from summa) (1.9.1)
    Requirement already satisfied: numpy<1.25.0,>=1.18.5 in /opt/conda/lib/python3.10/site-packages (from scipy>=0.19->summa) (1.23.3)
    Building wheels for collected packages: summa
      Building wheel for summa (setup.py) ... [?25ldone
    [?25h  Created wheel for summa: filename=summa-1.2.0-py3-none-any.whl size=54390 sha256=fbcd1f4b1f9449389b57337c40923340aadd4171993a0ec3468d31b5e2eb11df
      Stored in directory: /home/jovyan/.cache/pip/wheels/98/76/c7/9bba0baff81fee6694bf15e71d0323d37231c9cf811cd1ade7
    Successfully built summa
    Installing collected packages: summa
    Successfully installed summa-1.2.0
```


### Import Libraries


```python
#Basic
from docx import Document
import pandas as pd
import matplotlib.pyplot as plt
import datasets
import numpy as np

#Extractive Summarisation
import re
import nltk
import sentencepiece as spm
from summarizer import Summarizer
from nltk.tokenize import sent_tokenize
from transformers import pipeline, set_seed
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
from transformers import PegasusTokenizer, PegasusForConditionalGeneration
from rouge import Rouge
from summa import keywords

# Abstractive Summarisation
from transformers import AutoTokenizer, AutoModel
import torch
import torch.nn.functional as F

# Keywords
import yake
from keybert import KeyBERT
from summa import keywords
from sklearn.feature_extraction.text import TfidfVectorizer
```

## Key Definition

**Large Language Model (LLM)** is a type of language processing technology used for text recognition and performing text-related tasks such as summarising, text extraction, text classification, and text dialogue. LLMs can fulfil our purpose of extracting information.

There are two type of summarisations in LLM: 

1. **Extractive Summarisation**: this approach extracts the most important phrases and lines from the documents.

2. **Abstractive Summarisation**: this approach creates new phrases and terms that are different from the original document, retaining all original content.

This case tests both these listsed types. Considering the variety of popular LLM models available, this report first compares various models to determine which is the most suitable for the tasks. Then the most suitable model is used to conduct relevant summaries to derive insights. The testing process for both types of summaries is as follows:

## Summarisation

### Extractive Summarisation

#### **Model Comparison**

There are four main models for LLM: Pegasus, BART, T5 and GPT-4.

| **Model**      | **Underlying Principle**                                                                                                                                                                                                                                                                           | **Advantages for Summarisation**                                                                                                                                                                                                                                                                              | **Disadvantages for Summarisation**                                                                                                                                                                                                                       |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Pegasus**    | - Pre-training with **Gap-Sentence Generation (GSG)**: Sentences are masked, and the model learns to generate missing sentences, which simulates summarisation tasks.                                                                       | - **Specifically designed** for summarisation, with pre-training objective closely aligned to the task.<br>- **Handles long documents** well.                                             | - **Specialised** for summarisation, so less flexible for other tasks.                                 |
| **BART**       | - **Denoising autoencoder** trained to recover original text from corrupted input.                                                                                              | - Pre-trained on **large datasets**, providing a strong base for extractive summarisation tasks.              | - Summaries might occasionally lack **coherence** or **factual accuracy** due to the free-form generation style.                                                          |
| **T5**         | - **Text-to-Text Transfer Transformer**: Frames all tasks (classification, summarisation, etc.) as a **text-to-text** problem.<br>- Pre-trained on the **Colossal Clean Crawled Corpus (C4)** dataset using a denoising objective.                                                                  | - Extremely **flexible** for many LLM tasks, including summarisation. | - May not perform as well on **highly specialised summarisation tasks** compared to models specifically tuned for summarisation.<br>- Requires careful prompt design for optimal summarisation results. |
| **GPT-4**      | - **Large language model** based on a **transformer architecture**.<br>- Pre-trained with **unsupervised learning** on vast amounts of diverse text data.<br>                         | - Handles **open-domain** and **complex texts** well.  | - Requires **API** access and is computationally demanding, but delivers excellent thematic analysis. GPT-4 cannot run in local.                |



As GPT-4 is an online model with data privacy risks, this study selects models **Pegasus, BART and T5** for LLM.

To test the performance of Pegasus, BART, and T5 models on Extractive Summarisation, this study uses content from a randomly selected speaker, Matthew Pullen, as a test sample.  

**Everything after this point would be moved to results- separate the above and add in methodology**

## LLM Processing and Results

#### **Code Tab**

##### **Doc Processing**


```python
def extract_text_from_docx(docx_file):
    doc = Document(docx_file)
    full_text = []
    for para in doc.paragraphs:
        if para.text.strip():
            full_text.append(para.text)
    return '\n'.join(full_text)

#########################################

def extract_speaker_content(text, speakers):
    speaker_contents = {speaker: "" for speaker in speakers}
    paragraphs = text.split('\n')
    
    current_speaker = None

    for paragraph in paragraphs:
        for speaker in speakers:
            if paragraph.startswith(speaker + ":"):
                current_speaker = speaker
                content = paragraph[len(speaker) + 1:].strip()
                speaker_contents[speaker] += content + "\n"
                break
        else:
            if current_speaker:
                speaker_contents[current_speaker] += paragraph.strip() + "\n"

    return speaker_contents

#########################################

# Extract the speaker's speech content 
# according to their name and store it in a string field
def extract_speaker_content(text, speakers):
    speaker_contents = {speaker: '' for speaker in speakers}  # Initialize with empty strings instead of lists
    paragraphs = text.split('\n')
    
    for paragraph in paragraphs:
        # Matches paragraphs that begin with the speaker's name
        for speaker in speakers:
            if paragraph.startswith(speaker + ":"):
                # Extract the speaker's speech and remove the name part
                content = paragraph[len(speaker) + 1:].strip()  # Remove the name and colon
                speaker_contents[speaker] += content + ' '  # Append the content to the corresponding speaker's string
    
    return speaker_contents

#########################################

if __name__ == "__main__":
    meeting_text = extract_text_from_docx('Group_1.docx')  # Path to the file provided
    
    # Identify speakers who need attention
    target_speakers = ['Matthew Pullen', 'Matt Newby', 'Camelia Smith', 'Megan Rourke']
    
    # Extract the speech content of each speaker and store it in a string field
    speaker_contents = extract_speaker_content(meeting_text, target_speakers)
    
    # Output the speech content of each speaker
    for speaker, content in speaker_contents.items():
        print(f"{speaker}'s content:\n{content.strip()}\n")
        print("-" * 50)
    
    # Store the speeches as strings
    matthew_pullen_content = speaker_contents['Matthew Pullen'].strip()
    matt_newby_content = speaker_contents['Matt Newby'].strip()
    camelia_smith_content = speaker_contents['Camelia Smith'].strip()
    megan_rourke_content = speaker_contents['Megan Rourke'].strip()
```

```{toggle}
    Matthew Pullen's content:
    Shall I start? I guess there's different ways of looking at it. We use housing data at different trigger points, maybe it's the place to start so all the way from maybe we want to know when something is in pre-app, in an application, it's got a decision, so both if it's got a resolution to grant through planning committee and if it's got a final decision with the section 106. And then moving further through the process, bigger points at when they're when they're starting to look at conditions when they're having conditions signed off, including specific conditions within permission then commencement on site, commencement can mean a different thing depending on. We we've got plenty. But yeah, we'd be happy to share with you and take you through. I mean, look, we do stuff using Excel spreadsheets because we haven't had anything more sophisticated than. I don't think it hopefully this can be of help to you and it can fit into the project rather than being awkward or clash, but yeah, we try and. We layer in assumptions. Can't remember all of the assumptions but we layer in assumptions that we I think it's generally we assume commencement two years after the date of permission but then we layer in assumptions about when things might get permission. For schemes that aren't in the planning process yet, we just sort of layer in some assumptions of when we think it might come ahead and then at two years on from the point of permission and then in terms of other funding that doesn't come in at the point of commencement, can we? We tend to layer in assumptions on how long it would take to build something that's under 200 units, 2 to 500, 500 to 1000. So yeah, we've got layers of assumptions in there, not necessarily based on huge amounts of data, research to come up with them and so there's definitely some work to do there as well about how we can. There's other assumptions we have done some research to back up about the split of tenure housing mix and the floor space associated with. With different size, different types of units as well and we've done that off of reality rather than using planning policies because planning policy doesn't always get adhered to. So we have got some research that we could probably feed in as well, but we probably could do with an update, something a bit more comprehensive. Really, the ones that I've just mentioned, we, depending on what it is, sometimes we need to look at this by unit. Sometimes we need to look at it by square metre. Just gets more confusing, doesn't it? The more you talk about it, kind of like, oh, there's a lot in. I guess from my point of view, there's definitely a hole in our data for our CIL forecasting when it comes to commercial, but we haven't got anything anywhere near as sophisticated as we've got for this holes in our housing approach as well, but the commercial was far less sophisticated that we basically take any big commercial sites that we know like North Quay that that's going to have lots of commercial artefact and then we ignore really the mixed-use sites and on the most part, the commercial stuff is, One to two floors and then you've got 44 floors of residential on top. And so, we've kind of had to prioritise where we put our time and energy. Really. But it would be fantastic to be able to have. Or complete picture of it, because I mean, at the moment we're seeing office space not particularly isn't particularly popular, but things change over time and who knows what the future is going to look like and emerging life science you have uses and all sorts of other things. It would be. It would be good to be able to eventually one day have something that's comprehensive. I think absolutely. If you if you just think in terms of when developments are going to complete and be occupied, that then impacts on really every service in the Council. Obviously from you know when do we need to have new bin routes and when? When are people going to be suddenly occupying these flats and producing rubbish to? When will council tax kick in? When will all sorts of all sorts of? I think I do think that, for everyone here, something that is going to be quite complicated is because those sites that are in the system even in a pre-app stage, we're going to know what the applications are saying? And that can feed in both sites that aren't in the planning system at all. They are going to be tricky, but I think. Good question. Because we they get, it depends where you want to go with this. This tool really if you're if you're trying to forecast housing completions over the next three years, well, you only need stuff that's in the planning system. Yeah, I mean, you can do it through the schlot. Even then, some of those are complete pie in the sky. They're never going to happen, and the schlot ages quite quickly. And if you start to move in with a schlot and then by the time the local planning gets adopted, the shelves pretty outward, and then you get a couple of years later, it's it all feels a bit out of date. So, we tend to sort of scrape through anything we know and stuff comes in through pre app and then applications that we just that wasn't expected. So, like I mean the call for site allocation for that. It's very, it's another difficulty that you're going to have, I think, is that what makes it into the planning policy document? As a site location, it's one thing what the planning and reality are two very different worlds. So, stuff can happen but not necessarily being planned. I get that's what you're doing here, but you might have to make some decisions at some point of saying, well, I don't think we can make this data in the 1st place work for every single person for in the Council. You might have to talk to him on certain things, because otherwise the number of columns you've got in your spreadsheet is going to end up at, you know, just beyond unmanageable, because there's 15 different definitions of each metric. It might get awkward. I think the complication is that in that instance is, does anyone want to see the gross or does everyone want to see the net? Because if people want to see both of that, we should then go to run that through the rest of the data as well. So, you'll need to have the tenure in the mix breakdown all of that based on gross and net the whole way through. That's got a lot of many to many relationships haven't used to do. I was going to say certainly on some things we've done, we've had to kind of do something that works for most and then like I said, we've taken off the little ones and just put them in one windfall like, similarly, we've had to be a bit bespoke for some of the really big ones as well, and so something as complex as Lemon road or Wood Wharf. You know, an outline permission. All of these deserved matters. And then section 73 applications layered all over it before you know it for one site you could have, don't know 15 or 20, but who's in your database and just making sure that, that all works and makes sense and you're not double counting anywhere and when you know this this point where Section 73 is given permission, but you don't know whether they're going to commence the section 73 or whether they're going to stick with the offer permission and so you'll need some way of making sure that we're we know when switch one off and switch on. I mean that is. The idea of changes is another key aspect of it, isn't it? I’m struggling to follow. Do you do you mean if you've got sort of a section 106 for a whole development, it's then broken down into phases? Or what do you mean? Well, I guess you'd never have to be putting money in there. You could divide it by 100, I guess or you could just put it in once. I mean, What does a section 106 secure? We want to know about really. It's money and the breakdown of the housing units you could do row by row anyway, so that's not a problem. Other than that, it's money or big bits of infrastructure. We'll probably want to know about that. It's not that you ignore the big bits of infrastructure, there's not that many of them, and we've got a separate excel sheet with them in. You don't need to replace every Excel sheet. Why? Can I ask why you're going down to one row for each unit? What's the requiring that as opposed to having one row for the 100 units? That, that, that makes sense, yeah. It's not necessarily. As I said earlier, those assumptions we use because this stuff we do that goes down to square metre. To forecast it all, we have to be looking at square metre each, but we have an assumption that assumptions again based on some data we've looked at actual applications that we've measured plans we've seen to say that. The assumptions I guess are based on average. We don’t, I mean. I guess what you can. Where we use the assumptions is for the future stuff. So we can get stuff that's in the system will have done. My sell team will measured the plans and have come up with the actual sale amount, so we don't. We just put that in, we don't. I'm not saying we do need to but, it would feel useful information if we could convert homes into people at some point. Obviously, there is Census data and there's assumptions from ONS or the GLA or various sources of as to how many people you would expect to live in each type of home. Quite a local thing as well. That could be useful, but you could also probably sit down and have this session about just that aspect of it about whether those people are new residents to the borough or not, or whether they come out of overcrowded homes, what type of people are living in there? What age they are, child yields all of these kinds of things. So, it could get very complicated. Maybe that's for again for a further phase, but that would be really interesting information because while some people might go off. The data they might want is homes or square metres. Some people are going to be interested in the number of people in that. A lot of our infrastructure planning it's based on people. How many kids are they going to be for schools? How many people for doctors and parks? Yeah, I think so. I mean that there is population projection because when you get into population projection, it's not just new development, as well, it's birth death and migration and all sorts of things and so. It's kind of why I raised it as a question about whether it would be, how useful it would be. I think it could be useful to then feed into other models because the GLA do a model and I don't know what their assumptions are to go into that model about our development. Presumably they take what our local plan says and what our policies say, they've run some assumptions through it and say this is how many people are going to be in that those developments. But I don't know whether they take into account overcrowding. So people not new people just moving around in the borough if they do, how they do. But if we feel we’ve got. I also worry a bit that they go just on a policy basis. If we've got a better idea of, I said planning and reality aren't. We've got really solid housing forecast data. It would be good to get that fed into the right places. I suspect people are using different population projections all over the place. I don't really want to repeat what I've already said and taken up more of the meeting, but everything we do at the moment, some of it quite reasonably comprehensively, some of it based on a lot of assumptions, some of it taking a long time, some of it that we only do once a year because it takes such a long time. I think there's plenty of opportunities to just hopefully over a lot of those issues and mesh may make it quicker, make it more efficient, make it more accurate, make it more available. I suspect so. I think it’s what we've been talking about is that this is hard. This is complex and. We get requests coming in saying we want to know how much into infrastructure levy, how much section 106 we're going to have to spend in the future and we've got to do so. We've got to find those answers and can't say right, well, we're going to get some government funding pulled together, a team and do a massive project to do that. We'll tell you in however long this is going to take. You just have to you've got to do something. So you put something together, you've put an Excel spreadsheet together and you, you do what you can and you get to a point where you think, well, this is this is strong enough that we can, we can use it and even if it's not perfect. Might be a question for Ambrey. I don't know, but I can tell you that that one of the reasons that we want to be Exocom system for section 106 is that it does that section 106 is a signed legal agreement that are scanned and so therefore being put through the reader to be able to extract all the paragraphs into a readable format. So well, so first of all, the document is now searchable which is really helpful when you've got 227-page document and secondly it extracts all the key points and triggers and obligations and puts it into ex-con as a system so that we can then workflow in. We've got some control over it as opposed to having a pile of 2000 legal agreements to kind of back your way through. But I'm sure you'll find examples where it's happened, but I think it will be in little bespoke systems. Ballistic, I think, I mean, 10 years ago all the planning applications were in paper files, so. But this, to have digital versions, even if they're not readable, to have digital versions of everything, that's been a monumental effort. It's a system for administering CIL and sectional assets. We can give you access. There'll be, yeah, there'll be. I don't know what level of metadata there is underneath it, but there's some metadata under there and it will include the basics of the site name and the PA number probably be PR and I recommend. It will definitely include the affordable housing breakdown and I would think and it would include data about financial contributions as well on the Section 106 side, on CIL side, it include all the data about square metre, for example, net space, that will be broken down by different use types as well, so into residential, commercial, etc, etc. Quite chunk of information in there, but it will only be cases that have been through the civil process. I always refer to the Lewisham one as well, because they had a really good one when I was working there 10 years ago, so it does feel as if we're at, we're at least 10 years behind on that one.
    
    --------------------------------------------------
    Matt Newby's content:
    Hi, Yeah. So, I sort of sit in the planning service as corporate lead, but guess where we use the data or I use the data quite a lot is aligned sort of more with the Plan Making team. But also, authority monitoring reports, so every couple of years we will produce reports sort of looking at the tenure, the accessibility of the unit. So wheelchair accessible homes starts, completions also sort of divvied up by sub area as per the kind of like indicators in the local plan so, to test, we have planning policy team. They need to assess how things, how the policies are performing. So as like an indicator framework at the back which kind of sets out kind of the kind of key bits that we will assess the plan and provide commentary on and some of that is obviously things that housing delivery. So, I think that's one of the kind of components which maybe I can send the link around as to the kind of framework in which this sort of data sets would be required. I didn't quite catch that. Yeah. So, I mean in terms of the kind of like subsections, like things like tenure accessibility, so wheelchair accessible homes is part of our indicator in terms of are we delivering the kind of London plan requirement for wheelchair accessible homes. I don't know how you sort of obtain that data, but the GLA sort of historically have done it but has been historically very hard to report on as on a unit level. So, I think that is definitely one that would be helpful in the future if there was a way to extract that data. Starts, completions and then also completions and approvals by sub area. So, the local plan has kind of sub areas, city, fringe and sort of the main sort of component of Tower Hamlets. And so, we have to sort of demonstrate kind of how each area is delivering or what each area is delivering in the plan because it's aligned with things like strategic sites and site allocations that are expected to deliver. So, it's a useful kind of exercise sort of breakdown the kind of spread of housing delivery across the borough. Hi yeah, I was just going to echo the sort of commercial point, obviously, I think what we've done with the housing data has been really good and maybe a slightly longer term project is the commercial because I think in planning policy, or AMR purposes, we have to sort of show how we're meeting economic need, a bit like housing and we just have no internal data on the commercial, I notice presented slightly more challenging now with kind of the permitted, the use class order and the flexibilities within it, but certainly when I found doing the monitoring report there wasn't really much in the way of kind of commercial. So that's everything from industrial to kind of retail and certainly something maybe for this longer term would be really helpful, so sort of just echoing Matt's point really around the kind of the other component of the picture and yeah, something that would be useful to sort of look at in the longer term. I was gonna say, yeah, it would be both. So it was part of mixed-use and kind of industrial or economic developments across the borough because we like the picture is that we kind of cross London are losing lots of industrial and other things. So we sort of need to sort of show what like how that's working. Are we gaining industrial or economic uses are we losing them? I think it's sort of a bit like housing in terms of delivery but certainly we need to sort of see under the sort of use classes in the sub sections within those youth classes to sort of demonstrate kind of how economic needs are being met. So yeah, it would be for mixed-use and commercial. And yeah, I just thought it was so like, I mean when I'm looking at this sort of data, it's useful for in a planning context is to kind of like, I don't know how if there's a kind of relation between the spreadsheet and the kind of like spatial layers in the local plans. So site allocation, industrial land or like I found myself when I'm going through this data, I sort of have the housing data and then I need to sort of talk, provide commentary around kind of like how our site allocations are doing sort of major development sites. So I think if there was a way to kind of add the sort of planning policy layer into the spreadsheet so you know kind of what is which site allocation. I think that'll be particularly helpful. I know like a lot of people will know it off the top of the head, but I think for sort of analysis purposes, I think that would be really helpful and including like things like employment land and other, town centres, for example, as well. There is also the kind of interactive policies map which would be which would accompany the local plan and the new one, and the commercial one. So, there was a kind of I guess you want to see it in the context of your scheme. But there is a kind of like address point kind of version of that. Yeah. Yeah, the. Yeah, the policies map should be accompanied by a kind of like paper version or a static one. And then there would be an interactive one. And ordinarily most there's local plans become more digital and interactive that should be there, and it should be able to pull up the layers for you. I can see if I can dig it out. Yeah, I think I think it's sort of, it's not so much an issue really, but I think obviously because now we have a kind of like slightly more live way of reporting and checking on the data because like from a planning perspective or you know we sort of take data as sort of a point in time. And I think there's a kind of you know you can report differently if you're kind of like constantly updating or tweaking or finding sort of improvements. So, I think it's just kind of a an acknowledgement that when the data is sent over, it's accurate as of that point because I think we could become a kind of having live and live data is a great thing and being able to, you know, looking forward to improve it in terms of quality. But I think at certain points like we've you know you can risk having the data and then something else, the numbers are different because we've relooked at something. So I think it's just kind of more of a point around the live nature of how we have this data and that when the data is sort of given to departments that they sort of take it as at that point and there's an acknowledgement of that rather than being sent updated versions, not that you guys do that or anything, it's just more kind of as we go into a slightly more live way of reporting our data. I was going to flag so slightly different just in terms of kind of like I think my experience around the sort of data and my role sort of sits kind of quite unique in planning that it sort of liaises with kind of other components of the Council as well. But is there kind of like as part of the programme maybe just for the final discussion, but like, is there a sort of component sort of sort of promote this kind of dashboard sort of going forward to kind of wider areas? Because I think one of the things I experienced when I first came here was, everyone was using all sorts of different data all over the place and I think I think given the sort of. Resource into sort of it. You know sort of getting this data kind of as good as it can be and the sort of usefulness of it. I think there is a kind of component of kind of like promotion of this across sort of parts beyond well maybe just with planning as well but beyond that as well I think it would be really beneficial to sort of for people to at least know it exists.
    
    --------------------------------------------------
    Camelia Smith's content:
    Yeah, I think you can disaggregate the housing types. So for example, the GLA has a dashboard where they've got the different types of housing, so they've got flat student accommodation, Houses, bungalows, C2, student, shelters, housing blocks. So the full range of types of accommodation in the borough. And what would that would be useful to include blocks of flats we've got organic on that's housing. I guess when you at the start feasibility, you could look to see whether there's any precedent in terms of taller buildings and but in terms of the actual breakdown of the units within that development, we wouldn't necessarily drill down to that level of detail unless you look at a specific planning application and see what was granted in terms of the unit mix and that might be might help us, yeah. Your proposals map. Those other sites are those part of the SCHLWITES or Corpusites have you come to know about those sites that through developer just coming in and saying I'm interested in developing this site or? So, the ones don't make it into the site allocations, the ones that don't go forward, the ones that you've projecting, Considered for a later date Two years later the site is unlocked for various reasons and it's able to be advanced. Yeah, and maybe something isn't in as a site allocation because there's land assembly difficulties there. I'm not sure if it's going to come head, but you know, instead of it coming ahead as one comprehensive 2000-unit thing. You might still find that your three plots come ahead and bring in 800 homes or something. So yeah, there's a planning isn't going to necessarily give you all of the answers new. Again, it depends on what the outputs you are looking for are here, then data to support a local plan versus the data that the mayor wants to see versus data that I'd like to see for this is data that, you know the waste team want to see might be completely different. Yeah, he was the old the oldest. We know it's all the teams in the department, but for different purposes, I guess, OK. Well, in the past, in terms of counting housing completions, so some departments count gross dwellings and other departments count net dwellings, and sometimes that, you know, is that discrepancy because in planning you have to count demolitions, get the net dwellings so sometimes that could cause an issue on particular sites in terms of total number of completions. That's just one example. Just have to ask around in the past if I just had to verify that this is you know net application or gross figure. In terms of the growth business, yeah make sure that everyone understands that that figure represents the net number of dwellings with that information has been derived from so that there's no discrepancies between planning figures and housing figures so just making sure that we all know the data source and how it's been compiled. In that particular instance, so there's only one example. I guess it depends on the department. If it's client, I guess you'd be working for net. Yeah. It's just in terms of accuracy, just knowing that you're dealing with the gross the net figure. The policy maps is important to overlay so that we know what the, you know, the planning and sort of remit is the context of the site and I think I think we probably mentioned the completion date that's important for housing department in terms of their allocations being able to nominate residents and to start drafting their nomination agreements. And even if it's a section 106 site and you've got an RSL on board and start sort of drafting the Section 106 in terms of the affordable housing delivery. So, this I guess this sort of chain of actions but could possibly think of all of them right now, but if it does come to me. Yeah, also Matt pointed out, the interactive policies map picks up and some of those indicators that we'll be looking at so might want to know whether it's in a conservation area, whether there's any listed properties within the vicinity of the site. So, some of it has already been mapped in GIS. I guess the contextual planning applications in the area would be helpful, but I you know you could easily look that up by going into the planning register, but if it's all available and. I was just thinking in terms of the completion dates on some sites, particularly Section 106 will be phased so you might have the first sort of occupations which might be the affordable housing, so maybe even splitting down the completions in terms of tenant types for completions, because that would be linked to some section, sorry planning conditions in terms of occupations and those dates will vary in terms when the social rented units are occupied, occupied versus the private units so you can drill down even further again, it just depends on how much information we want to gather. I got something as you said, like waste disposal to order the bins and you know all that. I was just thinking in terms of some sort of flagging system, so if the unit numbers change then it's flagged up that there's some sort of monitoring around updates, divisions, additions so that we can track any changes. And yeah, like history of changes. Track what’s happened? I think it is useful to add in, the unit mix you're talking about? You know, but it's like about household formation. What's been inherited, and that data stored on that system and that format? I like to echo that in terms of, so we're working on a scheme and residents comments that come back about objecting to the scheme in terms of its height and they've also mentioned social infrastructures. So doctors, GPS and I think having a positive aspects apart from residential would help to balance out the story in terms of development because often it's objections about lack of infrastructure and if we could show that there we are actually increasing the capacity of social infrastructure. In the area that may go some way to allay some residents’ concerns in terms of knowing that, OK, well, there's been 10 GPS that are opened within a 10 mile, you know 20 mile or whatever radius five miles radius the site. I think that could help in some way in terms of, you know, arguing for a development and justification that there is supporting infrastructure. Oh, I just had one about the it's the [?]Innovation Fund tab. So, what's the status in terms of, has Tower Hamlets applied or you some external project? And it's OK. See you. Then. I saw a list, but I didn't see the name of.
    
    --------------------------------------------------
    Megan Rourke's content:
    Hello. Yeah. So, we're coming from, I guess like a housing and regional client-side perspective. So, housing delivery, I think that we use we have a dashboard which I know is question 3, but cutting across it, I think we have a number of things. So, we have the site address, the ward and also whether it's HRA or general funds land in terms of needing to appropriate it or not. Planning Submission, contract award, start on site, completion date, approved budget which to be honest, I'm not sure you'd be able to publicly, but also the risks and the site constraints that we have on the project. So, we sort of have an overview, I guess what I think would be quite helpful would be at the moment we just list our site constraints, but I know from GIS it's pretty easy to be able to see those site constraints. So, it'd be really great to have like a sort of overall map which shows those things and has adds add out sort of photographs. But the main output for us is to talk to CDT and planning about start on site dates and all the issues that we're facing, but also to present to the mayor in terms of our targets and unit numbers and whether it's in design, planning, unfunded, funded etcetera. It wasn't so much a question, it was just a response to your question. And in terms of how we would plan on using the data. So I guess that ours is slightly different in that it looks like yours is more related to planning applications and how you would then process it. Correct me if I'm wrong, whereas ours is halfway to almost do very quick site assessments in order for site prioritisation so things like if they've already gone through pre app, how many pre apps they've had and then reference to that number so we can have a look at previous feasibility studies done if they're in a flood zone, if they're in a tall building zone. What the anticipated unit mix might be?, so we're able to sort of shift and select as things go up and almost create like a rag rating. Yeah, I think that's where I'm at. I know I've just jumped in front of you, but I think that's a really good point. Actually, at the moment with our feasibility studies, I find that I'm hopping in GIS between the Council and land, the development management, the other criteria. And then I'm also going on accolade. So there's not, there's, there's four different things that I'm looking at the same time, which if you forget one step, then means that you might forget that there was a planning consent right next to the site that you're developing on. And that site has actually got a 17 Storey building approval so it's probably undevelopable. Well, I was just gonna echo your sentiments, Matt. I think that that would be really, really helpful for us as well. And also one thing that I was thinking about yesterday was I believe on our GIS at the moment we have some of the current local plan principles, but we don't have anywhere the emerging local plan principles and I would really like to see, I guess from a photographic point of view how that is going to change because I we always need to know what's In and that would be super helpful. I think I know that it's in Reg 18 or it's just finished Reg. 18, But it would be great to see that. I suppose for me it would just be what policies would be relevant to the development. So for example, if you were, I know that we've got some sites are in a development agreement and we had planning a very helpfully written planning briefs for all of them and it was sort of just going through and it had a really useful table of what policies would apply to our scheme. So it's almost, I don't know, I'd love it if you could click on a site and then it would say this, this, this is this policy will be applicable. Oh, that we have already? That would be great. If so, yeah. Yeah, I was just gonna say the frustrations that I get, I'll just the sheer amount of human error because we have so many different Excel spreadsheets that unless you are all synonymously updating your spreadsheets, it means that one Excel spread is saying one thing and I want to say one thing and or it's something that's borrowed in the council, which you've got to ask X person about and they appear to be the repository for all of that information. So, if you then lose that person, you lose all the data. So yeah, it would be really great to have just one database where people are utilising it and then it's just all updated at the same time, so you just know this is a place to be able to go to. Yeah, I was gonna say I agree. I know that. Umm, with the housing register wait list for example, they will always say as of August 2024 as of September 2024 because otherwise yeah, you definitely would be in the habit of dates getting updated almost every day, right? I feel like I spend half of my life updating a tracker because it just changes so much. So, it's a way of saying OK on my on the 1st of the month that is the data that's correct until September 2024 with the knowledge that is changing. Yeah, I just was gonna say I agree with the need to have almost some sort of, I know that we've got the let's talk Tower Hamlets page, but it's really tricky, I think if you're resident and also to be honest, even as an officer to understand where they are and how far along, they're going, we had a conversation some months ago about setting up like a separate website and I didn't really get anywhere with it. But I'm just going to send a link to it's like a high participant for other councils. But I think Lewisham, Lewisham have got a very good website with their homes, where it literally just has a very simplistic map which says design and consultation approved on a construction completed and you can click on it and that also has the pre apps. So yeah, I feel like it goes back a bit to what we may be having discussion on half an hour ago where we were saying who is this for and is it ways of like almost having different levels. So, if you are presenting to senior management or performance board versus if you are presenting to other officers versus if you are presenting to the public, there must be a way of pre creating those layers to click on to, but I'm not sure. I'm not. I'm not that much of a tech wiz, I'm just going to send through the website so you guys can browse the notion 1. Yeah, I have to say I do often loo there. They've got a very good small sites, SBD which I currently look at, but I do find I mean that's on there. The Lewisham one is also on that overall Lewisham page so it's pretty easy to access, but I do find that their websites are pretty good and very nice graphics, whoever did them.
    
    --------------------------------------------------
```
    

##### **BART**


```python
model = Summarizer()
result = model(matthew_pullen_content, min_length=60, num_sentences=5)
BART = ''.join(result)
print(BART)
```

config.json:   0%|          | 0.00/571 [00:00<?, ?B/s]<br>
model.safetensors:   0%|          | 0.00/1.34G [00:00<?, ?B/s]<br>
tokenizer_config.json:   0%|          | 0.00/48.0 [00:00<?, ?B/s]<br>
vocab.txt:   0%|          | 0.00/232k [00:00<?, ?B/s]<br>
tokenizer.json:   0%|          | 0.00/466k [00:00<?, ?B/s]

We use housing data at different trigger points, maybe it's the place to start so all the way from maybe we want to know when something is in pre-app, in an application, it's got a decision, so both if it's got a resolution to grant through planning committee and if it's got a final decision with the section 106. With different size, different types of units as well and we've done that off of reality rather than using planning policies because planning policy doesn't always get adhered to. And so, we've kind of had to prioritise where we put our time and energy. This tool really if you're if you're trying to forecast housing completions over the next three years, well, you only need stuff that's in the planning system. I was going to say certainly on some things we've done, we've had to kind of do something that works for most and then like I said, we've taken off the little ones and just put them in one windfall like, similarly, we've had to be a bit bespoke for some of the really big ones as well, and so something as complex as Lemon road or Wood Wharf.
    

Ref:https://github.com/dmmiller612/bert-extractive-summarizer

##### **T5**


```python
pipe = pipeline('summarization', model = 't5-large', min_length=100)
T5 = pipe(matthew_pullen_content)
t5 = ', '.join(str(item) for item in T5)
T5
```

config.json:   0%|          | 0.00/1.21k [00:00<?, ?B/s]
model.safetensors:   0%|          | 0.00/2.95G [00:00<?, ?B/s]
generation_config.json:   0%|          | 0.00/147 [00:00<?, ?B/s]
spiece.model:   0%|          | 0.00/792k [00:00<?, ?B/s]
tokenizer.json:   0%|          | 0.00/1.39M [00:00<?, ?B/s]

[{'summary_text': "if you're trying to forecast housing completions over the next three years, it's going to be a bit more complicated . we've got a lot of assumptions that we use, but they're not necessarily based on huge amounts of data . it would be useful to have that information in a system that's searchable and can be fed into other models . if we can do that, then we'll be able to do a better job of forecasting. I think we're"}]


##### **Pegasus**


```python
# Pegasus model and SentencePiece tokenizer
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-cnn_dailymail")
model = PegasusForConditionalGeneration.from_pretrained("google/pegasus-cnn_dailymail")

# Tokenize the text
tokens = tokenizer(matthew_pullen_content, truncation=True, padding="longest", return_tensors="pt")

# Generate summary
summary_ids = model.generate(tokens["input_ids"], max_length=1024, min_length=100, num_beams=4, early_stopping=True)

# Decode and output the summary
PEGASUS = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
print(PEGASUS)
```

tokenizer_config.json:   0%|          | 0.00/88.0 [00:00<?, ?B/s]<br>
spiece.model:   0%|          | 0.00/1.91M [00:00<?, ?B/s]<br>
special_tokens_map.json:   0%|          | 0.00/65.0 [00:00<?, ?B/s]<br>
config.json:   0%|          | 0.00/1.12k [00:00<?, ?B/s]<br>
pytorch_model.bin:   0%|          | 0.00/2.28G [00:00<?, ?B/s]

Some weights of PegasusForConditionalGeneration were not initialized from the model checkpoint at google/pegasus-cnn_dailymail and are newly initialized: ['model.decoder.embed_positions.weight', 'model.encoder.embed_positions.weight']<br>
You should probably TRAIN this model on a down-stream task to be able to use it for predictions and inference.
generation_config.json:   0%|          | 0.00/280 [00:00<?, ?B/s]<br>
We use housing data at different trigger points, maybe it's the place to start .<n>We layer in assumptions about when things might get permission .<n>We tend to layer in assumptions on how long it would take to build something that's under 200 units .<n>There's definitely a hole in our data for our CIL forecasting when it comes to commercial .<n>But we haven't got anything anywhere near as sophisticated as we've got for this holes in our housing approach .

Ref: https://github.com/rohan-paul/MachineLearning-DeepLearning-Code-for-my-YouTube-Channel/blob/master/NLP/Text_Summarization_%20BART%20_T5_Pegasus.ipynb

#### **Results**

**BART identified the following as the five most important sentences from Matthew's speech:**

*"We use housing data at different trigger points, maybe it's the place to start so all the way from maybe we want to know when something is in pre-app, in an application, it's got a decision, so both if it's got a resolution to grant through planning committee and if it's got a final decision with the section 106. With different size, different types of units as well and we've done that off of reality rather than using planning policies because planning policy doesn't always get adhered to. And so, we've kind of had to prioritise where we put our time and energy. This tool really if you're if you're trying to forecast housing completions over the next three years, well, you only need stuff that's in the planning system. I was going to say certainly on some things we've done, we've had to kind of do something that works for most and then like I said, we've taken off the little ones and just put them in one windfall like, similarly, we've had to be a bit bespoke for some of the really big ones as well, and so something as complex as Lemon road or Wood Wharf."*

**T5 identified the following as the five most important sentences from Matthew's speech:**

*"if you're trying to forecast housing completions over the next three years, it's going to be a bit more complicated . we've got a lot of assumptions that we use, but they're not necessarily based on huge amounts of data . it would be useful to have that information in a system that's searchable and can be fed into other models . if we can do that, then we'll be able to do a better job of forecasting. I think we're."*

**Pegasus identified the following as the five most important sentences from Matthew's speech:**

*"We use housing data at different trigger points, maybe it's the place to start .<n>We layer in assumptions about when things might get permission .<n>We tend to layer in assumptions on how long it would take to build something that's under 200 units .<n>There's definitely a hole in our data for our CIL forecasting when it comes to commercial .<n>But we haven't got anything anywhere near as sophisticated as we've got for this holes in our housing approach."*

#### **Evaluation with Rouge**

To verify the quality of the results, this report employs the **Rouge** metric for evaluation. Rouge is used to assess text summarisation tasks. The scores obtained through Rouge range from 0 to 1, with a score of 1 indicating high quality, representing a high degree of similarity between the model-generated summary and the reference summary (manually generated).

For the Rouge evaluation, a reference summary is necessary. This report has set the following five sentences as the reference summary, each representing one of the five critical aspects of the overall requirements of the Housing Data Flow project.

1. **Trigger points of housing data needed**: *"We use housing data at different <u>trigger points</u> maybe it's the place to start so all the way from maybe we want to know when something is in <u>pre-app</u> in an application it's got a <u>decision</u> so both if it's got a resolution to grant through <u>planning committee</u> and if it's got a <u>final decision</u> with the <u>section 106</u>."*

2. **Monitoring and continue of housing data**: *"And through the build process as they're making progress with building and <u>occupation</u>, we then use the points through <u>Section 106 monitoring</u> which go on forever but possibly there's not a need to pick them up in here because we have a section 106 monitoring system that might do that."*

3. **The role of data - prediction**: *"In the <u>future</u> we'll also use it to <u>forecast workload</u> as well and as we're expecting developments to move through the process we know when workload is going to be coming in too."*

4. **Platform and dushbroud**: *"We've got plenty of <u>spreadsheets</u> for forecasting development moving through the system at the moment so we can do what I was mentioning before."*

5. **Key data**: *"Really the ones that I've just mentioned depending on what it is sometimes we need to look at this by <u>unit</u>, sometimes we need to look at it by <u>square metre</u>, and there is variation depending on the type of home it is as well that's both by <u>affordable and market</u> but also by the <u>number of bedrooms</u> as well."*

##### **Code Tab**


```python
refer = "We use housing data at different trigger points maybe it's the place to start so all the way from maybe we want to know when something is in pre-app in an application it's got a decision so both if it's got a resolution to grant through planning committee and if it's got a final decision with the section 106. And through the build process as they're making progress with building and occupation, we then use the points through Section 106 monitoring which go on forever but possibly there's not a need to pick them up in here because we have a section 106 monitoring system that might do that. In the future we'll also use it to forecast workload as well and as we're expecting developments to move through the process we know when workload is going to be coming in too. We've got plenty of spreadsheets for forecasting development moving through the system at the moment so we can do what I was mentioning before. Really the ones that I've just mentioned depending on what it is sometimes we need to look at this by unit, sometimes we need to look at it by square metre, and there is variation depending on the type of home it is as well that's both by affordable and market but also by the number of bedrooms as well."
```


```python
rouge = Rouge()

# Compute ROUGE scores
t5_scores = rouge.get_scores(t5, refer, avg=True)
bart_scores = rouge.get_scores(BART, refer, avg=True)
pegasus_scores = rouge.get_scores(PEGASUS, refer, avg=True)

# Print scores
print("T5 ROUGE Scores:", t5_scores)
print("BART ROUGE Scores:", bart_scores)
print("PEGASUS ROUGE Scores:", pegasus_scores)
```

    T5 ROUGE Scores: {'rouge-1': {'r': 0.23622047244094488, 'p': 0.46875, 'f': 0.3141361211984321}, 'rouge-2': {'r': 0.02926829268292683, 'p': 0.07692307692307693, 'f': 0.042402822862066335}, 'rouge-l': {'r': 0.1889763779527559, 'p': 0.375, 'f': 0.2513088960675421}}
    BART ROUGE Scores: {'rouge-1': {'r': 0.48031496062992124, 'p': 0.4728682170542636, 'f': 0.4765624950003052}, 'rouge-2': {'r': 0.24878048780487805, 'p': 0.2712765957446808, 'f': 0.25954197974218035}, 'rouge-l': {'r': 0.41732283464566927, 'p': 0.4108527131782946, 'f': 0.4140624950003052}}
    PEGASUS ROUGE Scores: {'rouge-1': {'r': 0.2204724409448819, 'p': 0.4666666666666667, 'f': 0.29946523628356553}, 'rouge-2': {'r': 0.05365853658536585, 'p': 0.14864864864864866, 'f': 0.07885304269729339}, 'rouge-l': {'r': 0.1968503937007874, 'p': 0.4166666666666667, 'f': 0.26737967478623925}}
    

The Rouge scores for each models are as follows:

| Model   | Metric   | Recall    | Precision | F-Score   |
|---------|----------|-----------|-----------|-----------|
| **T5**  | ROUGE-1  | 0.2362    | 0.46875   | 0.31414   |
|         | ROUGE-2  | 0.02927   | 0.07692   | 0.04240   |
|         | ROUGE-L  | 0.18898   | 0.37500   | 0.25131   |
| **BART**| ROUGE-1  | 0.48031   | 0.47287   | 0.47656   |
|         | ROUGE-2  | 0.24878   | 0.27128   | 0.25954   |
|         | ROUGE-L  | 0.41732   | 0.41085   | 0.41406   |
| **PEGASUS** | ROUGE-1 | 0.22047 | 0.46667   | 0.29947   |
|         | ROUGE-2  | 0.05366   | 0.14865   | 0.07885   |
|         | ROUGE-L  | 0.19685   | 0.41667   | 0.26738   |

The various subtypes of Rouge are explained as follows: 
* ROUGE-N: Similarity evaluation based on n consecutive words
* ROUGE-L：Order-based evaluation (text coherence and fluency)
* R: Proportion of N-grams in the reference summary also appear in the generated summary
* P： Proportion of N-grams in the generated summary also appear in the reference summary
* F1: Harmonic mean of recall and precision
_______________

* R Score: Number of overlapping N-grams / Total number of N-grams in the reference summary
* P Score: Number of overlapping N-grams / Total number of N-grams in the generated summary
* F1 Score = 2 × (Precision × Recall)/(Precision + Recall)


The results indicate that **BART** performed exceptionally well across all metrics. Consequently, this paper will now use the BART model to perform Extractive Summarisation on the dialogue content of the 12 participants, highlighting the key five points for each members.

#### **Extractive Summarisation Result - BART**

| Speaker            | Contribution |
|---------------------|--------------|
| **Matthew Pullen**  | - We use housing data at different trigger points, maybe it's the place to start so all the way from maybe we want to know when something is in pre-app, in an application, it's got a decision, so both if it's got a resolution to grant through planning committee and if it's got a final decision with the section 106.<br>- With different size, different types of units as well and we've done that off of reality rather than using planning policies because planning policy doesn't always get adhered to.<br>- And so, we've kind of had to prioritise where we put our time and energy.<br>- This tool really if you're if you're trying to forecast housing completions over the next three years, well, you only need stuff that's in the planning system.<br>- I was going to say certainly on some things we've done, we've had to kind of do something that works for most and then like I said, we've taken off the little ones and just put them in one windfall like, similarly, we've had to be a bit bespoke for some of the really big ones as well, and so something as complex as Lemon road or Wood Wharf. |
| **Matt Newby**      | - So, I sort of sit in the planning service as corporate lead, but guess where we use the data or I use the data quite a lot is aligned sort of more with the Plan Making team.<br>- They need to assess how things, how the policies are performing.<br>- So as like an indicator framework at the back which kind of sets out kind of the kind of key bits that we will assess the plan and provide commentary on and some of that is obviously things that housing delivery.<br>- So, it's a useful kind of exercise sort of breakdown the kind of spread of housing delivery across the borough.<br>- I think there is a kind of component of kind of like promotion of this across sort of parts beyond well maybe just with planning as well but beyond that as well I think it would be really beneficial to sort of for people to at least know it exists. |
| **Camelia Smith**   | - So for example, the GLA has a dashboard where they've got the different types of housing, so they've got flat student accommodation, Houses, bungalows, C2, student, shelters, housing blocks.<br>- So, the ones don't make it into the site allocations, the ones that don't go forward, the ones that you've projecting, Considered for a later date Two years later the site is unlocked for various reasons and it's able to be advanced.<br>- You might still find that your three plots come ahead and bring in 800 homes or something.<br>- What's been inherited, and that data stored on that system and that format?<br>- So doctors, GPS and I think having a positive aspects apart from residential would help to balance out the story in terms of development because often it's objections about lack of infrastructure and if we could show that there we are actually increasing the capacity of social infrastructure. |
| **Megan Rourke**    | - So, we're coming from, I guess like a housing and regional client-side perspective.<br>- So, it'd be really great to have like a sort of overall map which shows those things and has adds add out sort of photographs.<br>- It wasn't so much a question, it was just a response to your question.<br>- So it's almost, I don't know, I'd love it if you could click on a site and then it would say this, this, this is this policy will be applicable.<br>- Yeah, I was just gonna say the frustrations that I get, I'll just the sheer amount of human error because we have so many different Excel spreadsheets that unless you are all synonymously updating your spreadsheets, it means that one Excel spread is saying one thing and I want to say one thing and or it's something that's borrowed in the council, which you've got to ask X person about and they appear to be the repository for all of that information. |
| **Steven Heywood**  | - So, I mean for us in terms of using housing data, it's largely about just understanding what kind of delivery we've had in the past and what delivery we're likely to have in the future.<br>- So, the tenure which I think was mentioned on the slide before this one.<br>- And then for things that are further in the future, so sort of beyond five years, again we're just kind of having to make assumptions really and talk to developers as we put them into the site allocations and ask them kind of what do they think the timelines are that they're working on.<br>- No, I don't remember, from my perspective, this has got most of the stuff that we would usually ask for anyway when doing, you know, like I say, housing delivery and housing projections.<br>- I mean, I think basically kind of what I said earlier really in that I think it would just be very useful for us to use the kind of monitoring purposes for demonstrating what we've delivered and how the council is delivering housing. |
| **Hannah Horton**   | - I'm in the development coordination team, so we work closely with developers, but also colleagues and particularly highways and environmental health sort of supporting that construction phase.<br>- My team is a very basic one, just sort of an Excel spreadsheet that pulls data from a few places and but it is things like how many site, there's how many walkabouts with developers we've done how many construction forums.<br>- So it'd be worth you talking to either Sarah Wilkes or Jonathan Morrison.<br>- So usually through section 106, they might be delivering something for the community, such as a new school.<br>- So it'd be interesting to look at something like this and see when the key construction timelines are for some of those major developments and it might be that we sort of try and time these construction forums around them. |
| **Sam Happe**       | - As you can see from behind, I'm Sam, happy from the Council tax valuation part.<br>- And we do work heavily with numbering, so even though we work directly with the developers, we know what the development is called, the development name, as soon as we've got an order, we will then list it as what they will be known as, rather than a development, and we then have to send all that information over to the Inland Revenue Valuation Office because they are the people that band each property and then once they've done that, they will send the information back to us to upload.<br>- So it is really important that we get everything into the list when it should be.<br>- So we, we've got inspectors who are out on, you know, over Tower Hamlets.<br>- And so we get it at an early stage so we can also attach to the other information we give you on a weekly basis and to help with that, but it is well we're searching for it. |
| **Crissi Russo**    | - So I was gonna say Elika, just from a housing perspective, I think much of the information is, is probably quite similar that we're all looking for, but just in different guises.<br>- So for us, it's important to understand where we've received planning approvals when we expect starts on site, when we expect the schemes to be delivered and then for us, we have direct engagement with the RPs so should there be any deeds of variation then that's captured because in the planning sometimes that might not be captured whilst those negotiations are being had so for us it's I think it's quite similar information that that we're looking for because we're often asked to report in terms of what what's coming up in the pipeline and particularly looking at tenures as well.<br>- So I think it's probably quite similar information that we're all sort of looking for.<br>- So it'd be good to kind of understand this is this is only going to work for our own regeneration site.<br>- So it would be good to just have one set of data that is shared by all Council members and so and then we can philtre it in depending on our audience, but it means that the core data is the same for everybody. |
| **Melissa Spearman**| - I'm assuming what you mean is what information about housing completion like commencements or completions do we use?<br>- We do that kind of incidentally, to an extent with section 106, because we're always wanting to try and figure out, like, particularly if maybe they've done all their commencement obligations, but we're trying to get a sense of when the future ones might get triggered, will often try and ask for like a do you have a timeline?<br>- And so because, I mean, I don't really know loads about building control, but because CIL’s often one of the first things to get triggered, it's a really good indicator that something is starting on site, although they could also do enough to start CIL and give you know effect to their permission, but then they might stall on site and they might not continue for a long time so.<br>- But I think it's, yeah, it's all it would just be better to have like a source of truth that everyone is relying for the data.<br>- I guess to like by way of example like even the way that the CIL team monitor kind of follow that process through is different. |
| **Chris Hancox**    | - Can I just add on to that a little bit just from the data sources that we use is Mel says there's quite a few different areas that we get information from.<br>- So that might be an additional data source depending on how it goes to help us identify commencements.<br>- The only thing that I've noticed is missing from the information is CIL information and section 106 that doesn't have a column to say whether CIL has been paid or whether there's been a commencement notice issued to the CIL team.<br>- And that can just come out in the spreadsheet that gets sent to you periodically.<br>- I know this is a bit pie in the sky kind of thing, but it'll be handy when all this information is available to have, like an automated bots in the background that search the information and then inform the relevant teams according to criteria that they've set out for themselves. |
| **Natalya Palit**   | - I'm Natalya Palette, I joined last month leading the plan making team.<br>- What we did there was basically to set up an MS Teams form that was like a template.<br>- And I guess potentially I don't, I haven't looked at, I don't know what the boundaries are for East and West, but if you needed a kind of proxy like the way that it's divided up in the local plan, I don't know if you could kind of add together for example like city fringe is more on the West team and I don't know which you could add to that maybe not, but whether that would be possible.<br>- So I don't know if it's an issue here, but I remember coming up against in Southwark, they had a certain amount per I don't know however much square metres of children's play space that you didn't provide and you had to provide a kind of offsite contribution if for whatever shortfall.<br>- I don't know if it's the same supplier, I don't know how like if the back ends different. |
| **Paul Buckenham**  | - My name's Paul Buckenham and I'm head of development management.<br>- This is quite interesting to me because I think traditionally my service wouldn't necessarily get involved so much with the housing data side of things.<br>- So, we know what's completed now, how do we work out on the sites where there's still under construction?<br>- So I think I think actually there's probably a whole host of different development department management kind of activities that it would that it could potentially feed into probably like one of those ones that we don't necessarily quite understand all the implications until you actually see it work and start to use it and then you pick up on ideas for how you could you know.<br>- And the enforcement side of things as well, compliance to ensure that what's actually been built is what should have been built so. |


### Abstractive Summarisation

Models for abstractive summarisation are diverse. This report experiments with and compares Llama 3.2 and Copilot which are the two most popular LLM model. Brief introductions to the two models are as follows:

| Aspect                        | Llama 3 (Meta)                                      | Microsoft Copilot (Microsoft Teams)                 |
|-------------------------------|-----------------------------------------------------|-----------------------------------------------------|
| **Underlying Principle**      | LLM: Uses transformer models trained on diverse texts for deep natural language processing, capable of running locally to ensure data security. | Integration of LLM and NLP: Utilizes AI tailored for Teams, focusing on extracting actionable insights from communications, operates online using Microsoft's cloud security protocols. |
| **Advantages**                | - Generates detailed, context-aware summaries adaptable to various styles.<br>- "A multimodal large language model (LLM) capable of visual reasoning, image captioning, and answering questions about images." | - Seamless integration with Teams enhances productivity.<br>- Summaries include explicit citations to original texts, improving traceability. |
| **Disadvantages**             | - High computational costs.<br>- Potential bias in summaries due to training data.<br>- Summaries lack specific citations to sources, which might affect transparency. | - Limited to summarizing content within Microsoft Teams.<br>- May overlook complex nuances in discussions.<br>- Slower response times due to reliance on internet connectivity and cloud processing. |
| **Security**                  | - Can be operated locally, providing control over data security and faster response times. | - Relies on Microsoft's robust online security measures:"Copilot searches, processes and uses organisations’ data to provide the responses, which are specific to your organisation and user based on what they can access." |

https://www.fordway.com/chat-gpt-bard-llama-and-microsoft-copilot

https://medium.com/@rahultiwari065/unlocking-the-power-of-llama-3-2-vision-a-comprehensive-guide-to-metas-multimodal-ai-b200da72b685

The two models differ in their advantages and principles. To determine which model is more suitable for the User Research Meeting text, this report will test both models.

#### **Model Comparison**

This paper continues to use Matthew Pullen's dialogue to test the two models. The prompt used for testing is *"Summarise the following content into a five-sentence paragraph: ..."*. The output results are as follows:

##### **Llama 3.2 output**

*"Matthew Pullen expressed concerns about the usefulness of population projections for urban planning and development. They questioned the accuracy and reliability of existing models, citing a lack of consideration for overcrowding and assumptions based solely on policy. The speaker suggested that incorporating solid housing forecast data into these models could improve their accuracy. However, they noted that developing new systems to support population projections can be complex and time-consuming, requiring significant resources and effort. Despite the challenges, the speaker believes that having digital versions of planning documents and data, such as those provided by Exocom's system for section 106 agreements, can help streamline urban planning processes and improve decision-making."*

##### **Copilot output**

*"Matthew Pullen discussed the various ways housing data is used at different stages in the development process, from the pre-application stage to the final decision, including planning committee resolutions and section 106 agreements. He highlighted the importance of different commencement points, which vary depending on the context, such as building control, planning, CIL, and section 106. Matthew also explained that housing data is crucial for forecasting housing completions, CIL income, and section 106 income, which supports various teams' jobs. Additionally, he emphasized the need for a comprehensive system that includes both residential and non-residential data, and considers different types of housing, such as student housing and co-living. Finally, he discussed the challenges of identifying site boundaries and capturing data for sites not yet in the planning system."*

#### **Evaluation with SemScore**

Considering that abstractive summarisation reconstructs sentences and generates entirely new text for summaries, the previously used ROUGE metric, which only detects identical words, is not suitable for evaluating abstractive summaries. In contrast, **SemScore** is more appropriate for scenarios involving abstractive summaries.

SemScore is a method used to measure the similarity between a model-generated summary and a reference summary. It focuses on the semantic content of a model’s output using embeddings. This approach <u>converts text into mathematical vectors to represent its semantics</u>. Then, by comparing the similarity between these embedding vectors—typically using cosine similarity—SemScore can assess how closely the semantic content of the model's output aligns with the reference content. The results range from 0 to 1, with scores closer to 1 indicating greater similarity to the reference summary. This paper employs SemScore to test and compare the summaries produced by Copilot and Llama 3.2.

https://medium.com/@geronimo7/semscore-evaluating-llms-with-semantic-similarity-2abf5c2fadb9

A reference summary of Matthew Pullen's remarks during the meeting have been provided:

*"Matt Pullen understands the teams are using housing data at different trigger points depending on their work throughout the development stages. His team is using mostly Exacom and Excel spreadsheets for their CIL/S106 projection of income and workload (development progress) based on their assumption rules. Variables for their assumption is adjusted by development such as sqm, unit types and tenures. As planning could be different from reality, he’d like to have forecasting not solely based on policies. He understands the importance of having access to reliable data, considering the council teams forecast and align their services through the development’s sequence. He’d like to have a consistent forecasting data furthering it to comprehensive (commercial inclusive) and be able to convert the house data into people (demographic) data."*

Comparing the reference summary with those generated by Copilot and Llama 3.2, both scores are very close.

##### **Code Tab**


```python
# Load the tokenizer and model
tokenizer = AutoTokenizer.from_pretrained('sentence-transformers/all-mpnet-base-v2')
model = AutoModel.from_pretrained('sentence-transformers/all-mpnet-base-v2')

# Function to calculate embeddings
def get_embeddings(text):
    encoded_input = tokenizer(text, padding=True, truncation=True, return_tensors='pt')
    with torch.no_grad():
        model_output = model(**encoded_input)
    return model_output.pooler_output

# Function to calculate cosine similarity
def cosine_similarity(embedding1, embedding2):
    # Ensure the embeddings are 2D (1, N)
    embedding1 = embedding1.unsqueeze(0) if embedding1.dim() == 1 else embedding1
    embedding2 = embedding2.unsqueeze(0) if embedding2.dim() == 1 else embedding2
    # Compute cosine similarity and reduce to a single number
    similarity = F.cosine_similarity(embedding1, embedding2, dim=1)
    return similarity.mean()


# Texts to compare
reference_summary = """Matt Pullen understands the teams are using housing data at different trigger points depending on their work throughout the development stages. His team is using mostly Exacom and Excel spreadsheets for their CIL/S106 projection of income and workload (development progress) based on their assumption rules. Variables for their assumption is adjusted by development such as sqm, unit types and tenures. As planning could be different from reality, he’d like to have forecasting not solely based on policies. He understands the importance of having access to reliable data, considering the council teams forecast and align their services through the development’s sequence. He’d like to have a consistent forecasting data furthering it to comprehensive (commercial inclusive) and be able to convert the house data into people (demographic) data. 
"""
summaryC = """Matthew Pullen discussed the various ways housing data is used at different stages in the development process, from the pre-application stage to the final decision, including planning committee resolutions and section 106 agreements. He highlighted the importance of different commencement points, which vary depending on the context, such as building control, planning, CIL, and section 106. Matthew also explained that housing data is crucial for forecasting housing completions, CIL income, and section 106 income, which supports various teams' jobs. Additionally, he emphasized the need for a comprehensive system that includes both residential and non-residential data, and considers different types of housing, such as student housing and co-living. Finally, he discussed the challenges of identifying site boundaries and capturing data for sites not yet in the planning system.
"""
summaryL = """Matthew Pullen expressed concerns about the usefulness of population projections for urban planning and development. They questioned the accuracy and reliability of existing models, citing a lack of consideration for overcrowding and assumptions based solely on policy. The speaker suggested that incorporating solid housing forecast data into these models could improve their accuracy. However, they noted that developing new systems to support population projections can be complex and time-consuming, requiring significant resources and effort. Despite the challenges, the speaker believes that having digital versions of planning documents and data, such as those provided by Exocom's system for section 106 agreements, can help streamline urban planning processes and improve decision-making.
"""

# Get embeddings
embeddings_ref = get_embeddings(reference_summary)
embeddings_1 = get_embeddings(summaryC)
embeddings_2 = get_embeddings(summaryL)

# Calculate similarities
similarity1 = cosine_similarity(embeddings_ref, embeddings_1)
similarity2 = cosine_similarity(embeddings_ref, embeddings_2)

print(f"Similarity between Reference and Summary C: {similarity1.item()}")
print(f"Similarity between Reference and Summary L: {similarity2.item()}")
```

tokenizer_config.json:   0%|          | 0.00/363 [00:00<?, ?B/s]
vocab.txt:   0%|          | 0.00/232k [00:00<?, ?B/s]
tokenizer.json:   0%|          | 0.00/466k [00:00<?, ?B/s]
special_tokens_map.json:   0%|          | 0.00/239 [00:00<?, ?B/s]
config.json:   0%|          | 0.00/571 [00:00<?, ?B/s]
model.safetensors:   0%|          | 0.00/438M [00:00<?, ?B/s]
Similarity between Reference and Summary C: 0.7885517477989197
Similarity between Reference and Summary L: 0.7846035361289978
    

|    Model Name    |    SemScore    |
|------------------|----------------|
|    Copilot    |    0.7885517477989197    |
|    Llama 3.2    |    0.7846035361289978    |

**Copilot** scored **0.7886**, while **Llama 3.2** scored **0.7846**. This indicates that both Copilot and Llama 3.2 perform exceptionally well in summarising meeting records, with Copilot having a slight advantage. It is important to note that although Copilot and Llama 3.2 exhibit similar performance under the same prompt, reducing the restrictions of the prompt, such as changing it to ‘Summarise Following Content,’ would result in different focus points in their summaries. See the following results:

When the prompt used for testing is 'Summarise Following Content: ...', the results are as follows:

##### **Llama 3.2 General Output**

This appears to be a transcript of a meeting between Ambrey (likely an employee or representative from the Greater London Authority) and other individuals discussing infrastructure planning in London, specifically regarding population projections, development, and the use of technology to improve processes.

Some key points mentioned include:
1. Population projection: The group is concerned that current population projections may not be accurate, as they don't take into account factors such as birth rates, death rates, and migration.
2. Assumptions vs. reality: The group worries that policies are based on assumptions rather than solid data, which can lead to inaccuracies in planning.
3. Need for better infrastructure planning: The group recognizes the importance of having accurate and up-to-date information to inform infrastructure planning decisions.

Some specific examples and ideas mentioned include:
1. Using Excel spreadsheets to create a more comprehensive and accessible plan.
2. Utilizing the Exocom system for section 106 agreements, which allows for easier searching and analysis of contracts.
3. Leveraging digital technologies to improve processes and make information more available.
4. Comparing London's infrastructure planning process to that of Lewisham, where they had a more comprehensive and effective system in place.

Overall, the conversation highlights the challenges and complexities involved in infrastructure planning, as well as the need for innovative solutions and improved data management to support informed decision-making.

##### **Copilot General Output**

Matthew Pullen discussed the various ways housing data is used at different trigger points in the development process. He mentioned that housing data is used from the pre-application stage through to the final decision, including the resolution to grant through planning committee and the final decision with section 106. He highlighted the importance of different commencement points, which vary depending on the context, such as building control, planning, CIL, and section 106.

Matthew also explained that housing data is used for forecasting housing completions and CIL income, as well as section 106 income, which supports various teams' jobs. He mentioned that this data is crucial for forecasting workload and planning services.

Additionally, Matthew emphasized the importance of having a comprehensive system that includes both residential and non-residential data, as well as the need to consider different types of housing, such as student housing and co-living. He also discussed the challenges of identifying site boundaries and capturing data for sites that are not yet in the planning system.

Besides producing more text due to the absence of a sentence count limitation, it can also be observed that the two models focus on different summary points once the 'Paragraph' prompt restriction is removed. Copilot emphasizes a macro-level summary, attempting to cover broad topics extensively, while Llama 3.2 focuses on the micro-elements of the text, striving to delve into the categorization and significance of key content. This variation may relate to the differences in their training corpora and the fundamental principles of the models. In future work, either Copilot or Llama 3.2 can be chosen for Abstractive Summarisation based on specific job requirements.

#### **Abstractive Summarisation Result**

Below are the output results from both models when the prompt used is 'Summarise the following content into a five-sentence paragraph: ...' for all speakers:

| Name             | Llama 3.2 Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Copilot Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Matthew Pullen   | Matthew Pullen expressed concerns about the usefulness of population projections for urban planning and development. They questioned the accuracy and reliability of existing models, citing a lack of consideration for overcrowding and assumptions based solely on policy. The speaker suggested that incorporating solid housing forecast data into these models could improve their accuracy. However, they noted that developing new systems to support population projections can be complex and time-consuming, requiring significant resources and effort. Despite the challenges, the speaker believes that having digital versions of planning documents and data, such as those provided by Exocom's system for section 106 agreements, can help streamline urban planning processes and improve decision-making. | Matthew Pullen discussed the various ways housing data is used at different stages in the development process, from the pre-application stage to the final decision, including planning committee resolutions and section 106 agreements. He highlighted the importance of different commencement points, which vary depending on the context, such as building control, planning, CIL, and section 106. Matthew also explained that housing data is crucial for forecasting housing completions, CIL income, and section 106 income, which supports various teams' jobs. Additionally, he emphasized the need for a comprehensive system that includes both residential and non-residential data, and considers different types of housing, such as student housing and co-living. Finally, he discussed the challenges of identifying site boundaries and capturing data for sites not yet in the planning system. |
| Matt Newby       | Matt Newby, corporate lead in the planning service, discussed the use of data in urban planning and development. He emphasized the importance of analyzing tenure accessibility, wheelchair accessible homes, starts, completions, and approvals by sub area to assess policy performance and deliverables. Matt highlighted that the London plan's requirements for wheelchair accessible homes are difficult to report on at a unit level, and he expressed interest in having better data to support policy assessments. He also mentioned that commercial data is currently challenging to obtain and analyze, particularly with regards to permitted use classes and flexibilities within those classes. Newby suggested promoting a dashboard that integrates planning policy layers, including site allocations, employment land, and town centres, to improve analysis and decision-making in urban planning. | Matt Newby, a corporate lead in the planning service, discussed the use of housing data in various contexts, including Plan Making, authority monitoring reports, and corporate performance to the mayor's annual delivery plan. He emphasized the importance of having up-to-date data for quality checks and mentioned that the data is used to assess policy performance and provide commentary on housing delivery. Matt highlighted the need for a comprehensive system that includes both residential and commercial data, and considers different types of housing, such as student housing and co-living. Additionally, he discussed the challenges of identifying site boundaries and capturing data for sites not yet in the planning system. Finally, he mentioned the importance of having a system that can provide a complete picture of housing and commercial developments. |
| Camelia Smith    | Camelia Smith discussed the importance of disaggregating housing types to improve analysis and decision-making in urban planning. She mentioned that the GLA has a dashboard with various types of housing, including flats, houses, bungalows, and more, which could be useful for planners. The conversation also touched on the challenges of data collection and accuracy, particularly when it comes to counting gross versus net dwellings and ensuring consistency across departments. Smith suggested using a flagging system to track changes in unit numbers and monitor updates, as well as incorporating unit mix data to inform development decisions. Additionally, she highlighted the importance of contextual planning information, such as conservation areas and listed properties, which could be overlaid on policy maps to provide a more comprehensive understanding of site contexts. | Camelia Smith emphasized the importance of understanding site feasibility and context when developing sites and submitting planning applications. She mentioned that knowing the density, number of units, and any precedents set in the locality helps in making sound justifications for development proposals. Camelia also highlighted the need for a comprehensive view of planning consents and constraints to avoid overlooking critical information. She suggested that integrating policy layers into the dataset would help in designing projects by providing relevant policy information for each site. Lastly, she noted that the GLA has a dashboard that includes different types of housing, which could be useful to include in their own dataset. |
| Megan Rourke     | Megan Rourke discussed the importance of having a centralized dashboard for housing delivery projects, highlighting the need for an overview of site constraints, photos, and other relevant information. She emphasized the value of creating a map that displays these factors, allowing for quick assessments and prioritization of sites. Megan also touched on the challenges of managing data across multiple Excel spreadsheets and departments, advocating for a single database where all stakeholders can access and update information simultaneously. The conversation also centered around the need for clearer policy guidance and visualization tools, such as highlighting applicable policies on site maps or planning briefs. Additionally, Megan mentioned the frustration of human error in tracking changes to data, particularly with regards to resident wait lists and housing register updates, which can be updated frequently due to changing circumstances. | Megan Rourke discussed the use of a dashboard for housing delivery, which includes site address, ward, and whether the land is HRA or general funds. She mentioned the importance of having an overall map to show site constraints and photographs, which would help in presenting information to the mayor regarding project targets and unit numbers. Megan also highlighted the need for quick site assessments for site prioritization, referencing previous feasibility studies, flood zones, and anticipated unit mix. She emphasized the importance of having a comprehensive view of planning consents and constraints to avoid overlooking critical information. Lastly, Megan suggested that integrating policy layers into the dataset would help in designing projects by providing relevant policy information for each site. |
| Steven Heywood   | The speaker from the planning policy team discussed their challenges in accessing and utilizing existing housing data. They highlighted the need for a centralized platform that can provide aggregate numbers on housing completions, tenure, and affordability, as well as individual scheme-level information such as construction timelines. The team currently relies on spreadsheets and manual data collection to gather this information, which can be time-consuming and inefficient. The speaker expressed interest in a mapping-based database that could display housing data spatially by area or sub-area of the borough, with features such as filtering by bedroom count and open space square meterage. They believe that such a system would greatly improve their ability to track progress and inform future local plan development, making it more efficient and effective for monitoring and projecting housing delivery. | Steven Heywood, from the planning policy team, discussed the importance of housing data for understanding past and future delivery, focusing on aggregate numbers and completion data. He mentioned the challenges of disentangling data from various sources and the usefulness of a centralized system. Steven also highlighted the need for annual monitoring reports and the significance of having accessible data for housing delivery projections. He expressed the desire for a map-based visualization of data to see housing completions by sub-areas of the borough. Lastly, he emphasized the potential benefits of visualizing data spatially for easier understanding and reporting. |
| Hannah Horton    | Hannah from the development coordination team expressed interest in having a centralized platform to access housing data, particularly for tracking commencement dates and infrastructure delivery. She believes that such a system would enable her team to better support developers, collect funding, and forecast future resource needs. Currently, her team relies on an Excel spreadsheet to gather data, which she thinks could be improved with a more robust and user-friendly platform like Exocom. Hannah is familiar with the CIL team's calculations and notes that extracting data from Exocom into a dashboard would be beneficial for tracking development timelines and planning conditions. She also hopes that such a system could help her team time construction forums around key developments, improving their ability to coordinate with infrastructure planning teams. | Hannah Horton, from the development coordination team, works closely with developers, highways, and environmental health to support the construction phase of developments. She is particularly interested in commencement dates to ensure proper support and funding collection for the Council. Hannah's team uses a basic Excel spreadsheet to track internal data such as site visits and construction forums. She emphasized the importance of having a centralized and up-to-date data dashboard to improve efficiency and reduce the need for manual data collection. Additionally, she mentioned the potential benefits of including information on infrastructure being delivered as part of development schemes, such as schools or healthcare centers. |
| Sam Happe        | Sam from the Council tax valuation department discussed the importance of a centralized data platform for managing new developments and their associated information. He mentioned that currently, they rely on various sources, including developers, planning teams, and the Inland Revenue Valuation Office, to gather and update this information. Sam highlighted the need for consistency and accuracy in reporting, particularly when it comes to terms like "re-provided" and "additionality", which are used in regeneration schemes. He also noted that the current system can be prone to errors and inaccuracies, especially when trying to match orders with planning permissions or identifying missing information. Sam believes that a standardized platform would greatly benefit their department, enabling them to report on the same data in different ways and reducing errors in their processes. | Sam Happe, from the Council tax valuation part, discussed the importance of forward planning and providing projection figures for the next few years. Sam emphasized the need for accurate and timely data to ensure that new properties are listed correctly and that the government funding, known as the new homes bonus, is received. They also mentioned the importance of working closely with developers and the Inland Revenue Valuation Office to ensure that properties are banded correctly and that all information is up-to-date. Sam highlighted the usefulness of a centralized data platform for managing this information and ensuring that nothing is missed. Additionally, Sam pointed out the challenges of keeping track of new developments and the need for a tool that can help with this process. |
| Crissi Russo     | The speaker from the housing association emphasized the importance of having a centralized system to access data, as similar information is needed by various teams across the organization. They highlighted discrepancies in figures and reporting requirements between building control and housing departments, which would be addressed with a standardized platform. The speaker expressed concern about who inputs the data and how it is collated, suggesting that individuals from different departments should populate the system to ensure accuracy. They also noted the need for clear definitions of terms such as "re-provided" and "additionality" in regeneration schemes, which would help ensure consistency in reporting. Ultimately, the goal is to have a shared set of core data that can be filtered by department, enabling teams to report on the same information in different ways. | Crissi Russo mentioned that from a housing perspective, it is important to understand where planning approvals have been received, when starts on site are expected, and when schemes are expected to be delivered. They emphasized the need for direct engagement with RPs (Registered Providers) to capture any deeds of variation that might not be reflected in planning. Crissi also highlighted the discrepancies in figures between different teams, such as building control and housing associations, due to issues like unresolved leaks. They pointed out the importance of understanding whether regeneration schemes are re-providing existing units or delivering additional units. Lastly, Crissi suggested that it would be beneficial to have a centralized system that pulls data from different sources to ensure accuracy and consistency. |
| Melissa Spearman | The speaker is discussing the challenges of accessing information on completed construction projects in London. They mention that building control has been able to gather some data through their records, but more accurate and up-to-date information would be beneficial for monitoring progress and ensuring compliance with regulations. The speaker hopes to create a "source of truth" system that can pull together data from various sources, including permits, section 106 agreements, and construction plans. This would make it easier to track the completion of projects and ensure that developers are meeting their obligations, particularly in terms of infrastructure delivery. By having access to this information, the speaker's team could better inform decision-making and planning for future developments, and ultimately help deliver more effective development control policies. | Melissa Spearman, who works in section 106, explained that their team focuses on housing commencements and affordable housing delivery, using multiple data sources like building control commencements, CIL commencement information, and site visits. They collaborate with the housing team to get updates on affordable housing progress. Melissa mentioned that they do not rely on a single data source but rather gather information from various teams within the Council. Additionally, she highlighted the manual nature of their work, which involves checking with individual developers to get timelines and updates. Lastly, Melissa noted that their monitoring system, Exocom, lacks dashboard capabilities but provides detailed information on affordable housing delivery. |
| Chris Hancox     | The discussion centered around improving the functionality of the planning application tracking system on Accolade. One suggestion was to include a field for CIL commencement, which would provide a clear indicator of when development had begun. Another proposal was to incorporate completion certificates from independent inspectors and building control into the system, making it easier to track progress and identify potential issues. The group also brainstormed ideas for automated systems that could alert teams automatically when certain criteria were met, such as occupation or discharge of conditions. Additionally, the conversation touched on the use of levelling up legislation to encourage developers to move stalled projects forward by providing a completion notice and requiring them to disclose their time scales and reasons for delays. | Chris Hancox discussed various data sources and their importance in monitoring housing commencements and affordable housing delivery. He mentioned that one of the new data sources will be the commencement notices required under the Levelling-up and Regeneration Act (LURA) 2023 regulations. Chris highlighted the use of Exocom, their main system, which includes various spreadsheets to monitor housing data. He emphasized the importance of accurate data and mentioned that they are working on filling in detailed information about affordable housing, including building control reference numbers and the status of units. Additionally, he pointed out the need for a column to indicate whether CIL (Community Infrastructure Levy) has been paid or if a commencement notice has been issued. |
| Natalya Palit    | Natalya Palette introduced herself as the new plan making team leader and discussed the housing data used for the annual monitoring report, led by Matt Newby. She emphasized the need to prepare a detailed commentary on housing supply that supports local plans, focusing on completions, consented developments, and demographic projections. Natalya shared her experience with similar issues in consultancy work, including the importance of children's play space requirements and off-site contributions, as seen in Southwark's adopted plan. She mentioned that colleagues at Enfield council have been grappling with similar issues, using Exacom and exploring ways to link it with Council tax systems. Natalya suggested that a dashboard would be beneficial for the team during examination and hearing sessions, providing quick access to up-to-date information and facilitating faster response times. | Natalya Palit, who joined last month as the leader of the plan making team, discussed the housing data they use, which feeds into the annual monitoring report led by Matt Newby. She emphasized the need for detailed commentary on housing supply to support local plans, focusing on overall completions, consents, dwelling size mix, and tenure mix. Natalya shared an approach from her previous experience in Enfield, where they used an MS Teams form to streamline the process of updating annual monitoring reports by collecting data from developers. She suggested that having sub-area data within the borough, divided into City fringe, Central, Isle of Dogs, and the east side, would be helpful for their monitoring indicators. Additionally, she mentioned the importance of understanding the quantum of floor space and the net versus gross gain for mixed-use developments. |
| Paul Buckenham   | The discussion revolves around the complexities of managing multiple planning permissions on a single site, and how it can be challenging to track their progress and compliance. A potential solution is to break down the process into individual properties within a development unit, allowing for better monitoring and tracking of their status. The developer's actual building plans and timelines may not align with their original permission, highlighting the need for ongoing monitoring and assessment. The discussion also touches on the importance of planning discharge and conditions, as well as enforcement of compliance to ensure that approved developments are built as intended. However, challenges arise from potential confidentiality around certain aspects of site management, such as affordable housing and commercial-sensitive information, which may limit the ability to gather accurate data. | Paul Buckenham, head of development management, discussed the importance of accurate housing data for the mayor's pledge to deliver 4000 affordable homes by spring 2026. He emphasized the need to join the dots between planning permissions, commencements, and completions to build a trajectory of potential completions. Paul mentioned that his service traditionally wouldn't get involved with housing data but now needs to help the mayor understand how close they are to the pledge. He highlighted the challenge of forecasting completions and the necessity of contacting developers to get accurate timelines. Paul also noted the importance of having a consistent methodology for measuring housing data and the potential benefits of a single point of truth for the Council.|





It is important to note that due to inevitable errors in speech-to-text transcription, the model outputs can be affected. For instance, in Llama 3.2’s output for Matthew Pullen’s text, it incorrectly mentions an “Ambrey” employee, which was not a focal point of the meeting, nor was any speaker named “Ambrey”. In this regard, Copilot demonstrates better robustness.

### Extractive Summarisation VS Abstractive Summarisation

Comparing the two summaries, they have the following characteristics, points to note, applicable scenarios, advantages and disadvantages:


| Category        | Extractive Summary                                                                                                                                                                                | Abstractive Summary                                                                                                                                         |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Characteristics** | 1. Selects key sentences or phrases directly from the original text.<br>2. Focuses on preserving the most important or information-rich parts without altering the wording.                        | Generates new, concise summaries by understanding and rephrasing the original content.                                                                       |
| **Advantages**     | 1. Lower time and computational costs for model calculation.<br>2. Training of the model is transparent and can be used locally to ensure data security.                                           | 1. Uses natural language processing to interpret and convey the core meaning in a new form, providing smoother, more coherent, and more humane summaries.<br>2. High quality and readability of outputs.             |
| **Disadvantages**  | The sentences are not coherent as they are extracted directly from the text, which might lead to a lack of understanding of the context.                                                           | Higher computational costs compared to extractive summarization.<br>Prompt is not the only factor affecting the model's output; many models still operate as "black boxes."                                           |
| **Cautions**       | 1. Sensitivity to the value of tokens is unclear, and other metrics such as tokens used might vary with different texts, implying longer debugging times and uncertain outputs.                     | 1. Current LLM technology can still fabricate content from nothing.<br>2. Summaries might be affected by spelling errors in the original text.<br>3. Some models still require online access, e.g., Copilot. Check user agreements for data security before use. |
| **Applicability**  | Used when the key points of the original text need to be directly viewed and cited.                                                                                                               | Suitable for rephrasing long, complex information into concise, easily understandable forms.                                                                  |



### Insight

Whether in the results of extractive summarisation or abstractive summarisation, several key points were highlighted:
1. Data Sets: Nearly all participants emphasised the importance of data sets for their work, especially in <u>annual monitoring reports, demographic forecasting, land analysis, workflow processes, and the local plans</u>.
2. Data Platforms: Some participants suggested considering <u>new platforms</u> to replace older ones like Excel to enhance office efficiency.
3. Data Requirements: Some participants mentioned what the data should include, such as <u>types of housing, stages of construction, and affordable housing</u>.
4. Data Updates: There are currently inconsistencies in data due to a <u>lack of synchronised updates</u> between different departments or teams. Member suggested the necessity of establishing a centralised and reliable data source.

## Keywords

In addition to summarisation, this paper also compares different models for extracting keywords for meetings. Keywords help people know the essential themes. Particularly for User Research Meetings, extracting keywords enables quick understand people's areas of interest and expected improvements in their work. This information can guide the future digital produces. Meanwhile, using familiar keywords as titles or focal points on websites can enhance content accessibility, allowing individuals with reading disabilities to more easily find and use information.

This paper considers experimenting with six language processing models for keyword extraction: **YAKE, KeyBERT, Summa, TF-IDF, Copilot, and Llama 3.2**. YAKE, KeyBERT, Summa, and TF-IDF are tools specifically designed for keyword extraction, employing methods tailored for this purpose, usually <u>based on rule-based, statistical, or embedding-driven techniques</u>. In contrast, Copilot and Llama 3.2 perform keyword extraction within <u>a broader range of language processing tasks using their general language understanding capabilities</u>, benefiting from their ability to integrate multiple data sources and user-specific contexts.

Excluding Copilot and Llama 3.2, whose operating principles are not disclosed due to intellectual property and trade secrets, the principles, features, and unique aspects of the other four LLM models are as follows:

| **Method**   | **Theory**                                                                 | **Features the Model Considers**                                           | **Unique Aspects**                                     |
|--------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------|--------------------------------------------------------|
| **YAKE**     | Statistical, unsupervised. Relies on **local document properties**.            | - Word frequency within the document<br>- Word position<br>- Word co-occurrence<br>- Dispersion across the text | Does not require external corpus or training. Fast and lightweight. |
| **KeyBERT**  | Semantic, based on BERT embeddings. Measures **contextual similarity** between document and words. | - Deep contextual embeddings (BERT)<br>- Cosine similarity between document and keyword embeddings | Contextual understanding of text. Captures the meaning behind words and phrases. |
| **Summa**    | Graph-based ranking algorithm (TextRank), inspired by Google's PageRank.   | - Word co-occurrence<br>- Graph-based ranking of words by importance in the document | Captures relationships between words (**connection between words**), ideal for key phrase extraction. |
| **TF-IDF**   | Statistical, unsupervised. Combines **term frequency** and **inverse document frequency**. | - Word frequency in the document<br>- Rarity of words across the corpus | Simple and efficient. Weighs document-specific importance vs. rarity across a corpus. |

### Model Comparison

The outputs of the ten keywords from Matthew Pullen's text by the six models are as follows:

| Yake              | KeyBERT         | Summa          | TF-IDF          | Copilot                | Llama 3.2        |
|-------------------|-----------------|----------------|-----------------|------------------------|------------------|
| assumptions       | commencement    | planned        | assumptions     | Housing data           | Infrastructure   |
| planning          | planning        | plan           | section         | Trigger points         | Planning         |
| section           | plans           | housing data   | permission      | Pre-application        | Population       |
| data              | commence        | space          | planning        | Section 106            | Projections      |
| permission        | planned         | excel          | data            | Commencement           | Technology       |
| system            | triggers        | place          | 106             | Forecasting            | Data             |
| housing           | application     | permission     | system          | CIL income             | Analysis         |
| planning system   | assumptions     | application    | commercial      | Workload               | Development      |
| commercial        | agreements      | section        | commencement    | Non-residential data   | Growth           |
| applications      | development     | sectional      | metre           | Student housing        | London           |


#### **Code Tab**

##### **Set Stop Words**


```python
custom_stop_words = [
    "a", "about", "actually", "almost", "also", "although", "always", "am", "an", "and",
    "any", "are", "as", "at", "be", "became", "become", "but", "by", "can", "could",
    "did", "do", "does", "each", "either", "else", "for", "from", "had", "has", "have",
    "hence", "how", "i", "if", "in", "is", "it", "its", "just", "may", "maybe", "me",
    "might", "mine", "must", "my", "neither", "nor", "not", "of", "oh", "ok", "on",
    "once", "one", "only", "or", "other", "our", "ours", "out", "own", "people", "put",
    "re", "really", "s", "same", "she", "should", "so", "some", "such", "t", "than",
    "that", "the", "their", "theirs", "them", "then", "there", "these", "they", "this",
    "those", "through", "to", "too", "under", "until", "up", "very", "was", "we", "were",
    "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with",
    "you", "your", "yours", "yourself", "yourselves", "ve", "ll", "yeah", "want", "know",
    "think", "well", "going", "get", "got", "mean", "need", "point", "something", "stuff",
    "make", "makes", "making", "things","because", "would","into","all", "more","different",
    "years","things","many","like","layer","guess","based","thing","take","whether","site",
    "over","come","look","lot","kind","use","used","useful","say","don","time","sort","square",
    "off","down","quite","probably","bit","start","two","big","go","done","even","good","way",
    "long"
]
```

NLTK's list of english stopwords: https://gist.github.com/sebleier/554280

75 Stop Words That Are Common: https://blog.hubspot.com/marketing/stop-words-seo

##### **Yake**

Yake not rely on external data, corpus or pre-trained models, but based on the document its self (**Local Statistical Features**). Following are the features when Yake looking for a document or content:
1. **Term Frequency**: how many time the words appear in the doc (except those stop words).
2. **Position in the Doc**: Yake believes that the title, introduction or first paragraphys may be more relevant to the overall topic. Yake will give those word more weight when it do the coculation.
3. **Word Dispersion**: How evenly a words is distributed through the doc. Yake believe those words that appears across diffrerent paragraphs are more importent to the words appear in  only few sections
4. **Co-occurrence**: considering the same topic for different words (for example: "plan" and "planning" at the same topic, but different words)
5. **Uniqueness**: In order to avoid over-representing words, words that are distinct or rare within the document (but not necessarily rare in the entire language) can be considered more important.
6. **Contextual Relationship**: This can be measured by how close they appear to each other or how they influence one another in their surrounding context.


```python
# set the content for analysis
text = matthew_pullen_content

kw_extractor = yake.KeywordExtractor(
    #language=english
    lan= "en", 
    # max 3 words
    n=3, 
    # aviod duplicate word appear in the result (90% similarity)
    dedupLim=0.9, 
    #top 10 keywords
    top=10, 
    stopwords=custom_stop_words
)

# entracting the keywords from "text"
keywords = kw_extractor.extract_keywords(text)

# print the keywords
print("Top keywords and their scores:")
for kw, score in keywords:
    print(f"{kw}: {score}")

yake_list = [kw for kw, score in keywords]
```

    Top keywords and their scores:
    assumptions: 0.01910470469030072
    planning: 0.02714639930086541
    section: 0.030576054957495272
    data: 0.033984039463766776
    permission: 0.049955091044590755
    system: 0.06216639122715094
    housing: 0.06271764373002733
    planning system: 0.08258617466765696
    commercial: 0.08264724501909056
    applications: 0.09507326540820295
    

##### **KeyBERT**

This KeyBERT library built based on BERT model for extract the keywoords. The features are following:
1. **Semantic Similarity**: the similarity between document embedding anf keyword embedding. The cosine similarity between two vectors \( A \) and \( B \) is calculated as:

$$
\text{Cosine Similarity} = \frac{A \cdot B}{||A|| \cdot ||B||}
$$

- \( A \cdot B \) represents the dot product of vectors \( A \) and \( B \),
- \( ||A|| \) and \( ||B|| \) represent the magnitudes (norms) of vectors \( A \) and \( B \).

2. **Contextual Understanding**:BERT is trained to understand words in their context by looking at both the preceding and following words. This means that KeyBERT does not simply count word frequencies but instead understands how each word or phrase fits into the meaning of the document.
3. **BERT Embeddings**: KeyBERT compares these embeddings to rank candidate keywords. The embeddings are based on pre-trained knowledge from large corpora (e.g., Wikipedia), so they include a deep understanding of language structure and meaning.
4. **No Dependence on Frequency**: KeyBERT focuses solely on semantic relevance. Even if a word appears only a few times in the document, it can still be identified as a key concept if its meaning aligns closely with the document.


```python
doc = matthew_pullen_content

kw_model = KeyBERT()
keywords = kw_model.extract_keywords(
    doc, 
    # number of words for one keywords
    # I set 1,1 after testing 1,1; 1,2 and 1,3. 1,1 has the best performance.
    keyphrase_ngram_range=(1, 1), 
    # number of keywords we looking for
    stop_words=custom_stop_words, top_n=10)

# print the keywords and its score
for keyword, score in keywords:
    print(f"{keyword}: {score}")
keybert_list = [keyword for keyword, score in keywords]
```

modules.json:   0%|          | 0.00/349 [00:00<?, ?B/s]<br>
config_sentence_transformers.json:   0%|          | 0.00/116 [00:00<?, ?B/s]<br>
README.md:   0%|          | 0.00/10.7k [00:00<?, ?B/s]<br>
sentence_bert_config.json:   0%|          | 0.00/53.0 [00:00<?, ?B/s]<br>
config.json:   0%|          | 0.00/612 [00:00<?, ?B/s]<br>
model.safetensors:   0%|          | 0.00/90.9M [00:00<?, ?B/s]<br>
tokenizer_config.json:   0%|          | 0.00/350 [00:00<?, ?B/s]<br>
vocab.txt:   0%|          | 0.00/232k [00:00<?, ?B/s]<br>
tokenizer.json:   0%|          | 0.00/466k [00:00<?, ?B/s]<br>
special_tokens_map.json:   0%|          | 0.00/112 [00:00<?, ?B/s]<br>
1_Pooling/config.json:   0%|          | 0.00/190 [00:00<?, ?B/s]<br>

    commencement: 0.4556
    planning: 0.4397
    plans: 0.3788
    commence: 0.3247
    planned: 0.3244
    triggers: 0.3092
    application: 0.3047
    assumptions: 0.3038
    agreements: 0.2909
    development: 0.2906
    

Ref: https://github.com/MaartenGr/KeyBERT

##### **Summa**

Summa relies on graph-based ranking and co-occurrence relationships within the document (based on the TextRank algorithm). The features are following:
1. **Graph-based Ranking**: Each word in this graph is considered as a node. The <u>connection</u> between nodes is considered as one of the criteria of their importance.
2. **<u>Connection</u>**(Word Co-occurrence):Two words are considered related if they appear very close to each other in the text (within a predefined <u>window size</u>). The more times two words co-occur, the stronger their connection in the graph.
3. **<u>Window size</u>**: The window size is a parameter that defines how close two words need to be to create an edge between them (summa.keywords does not allow window resizing. The default is 2.).
4. **PageRank-style Voting**:Summa uses a variation of Google's PageRank algorithm, which is commonly used to rank web pages. In this case, instead of ranking web pages, words in the document vote for each other based on their relationships (co-occurrence).
5. **No Dependence on Frequency**


```python
# considering the "-s" words in content
def add_plural_words(word_list):
    pluralized_words = []
    for word in word_list:
        if word.endswith('y'):
            # For the "-ies"
            pluralized_words.append(word[:-1] + 'ies')
        elif word.endswith('s') or word.endswith('sh') or word.endswith('ch') or word.endswith('x'):
            # For the "-es"
            pluralized_words.append(word + 'es')
        else:
            # For the "-s"
            pluralized_words.append(word + 's')
    return word_list + pluralized_words

# Based on the original stop word list, comes out a list including their "-s" formet
custom_stop_words_s = add_plural_words(custom_stop_words)

# Print top 100 words for view
print(custom_stop_words[:100])
```

    ['a', 'about', 'actually', 'almost', 'also', 'although', 'always', 'am', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'became', 'become', 'but', 'by', 'can', 'could', 'did', 'do', 'does', 'each', 'either', 'else', 'for', 'from', 'had', 'has', 'have', 'hence', 'how', 'i', 'if', 'in', 'is', 'it', 'its', 'just', 'may', 'maybe', 'me', 'might', 'mine', 'must', 'my', 'neither', 'nor', 'not', 'of', 'oh', 'ok', 'on', 'once', 'one', 'only', 'or', 'other', 'our', 'ours', 'out', 'own', 'people', 'put', 're', 'really', 's', 'same', 'she', 'should', 'so', 'some', 'such', 't', 'than', 'that', 'the', 'their', 'theirs', 'them', 'then', 'there', 'these', 'they', 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'we', 'were', 'what', 'when']
    


```python
text = matthew_pullen_content

# Use TextRank to extract the keywords
extracted_keywords = keywords.keywords(text, 
                                       #Return keyword results as a list instead of a single string
                                       split=True, 
                                       #When returning keywords, their scores are returned. The higher the score, the higher the relevance between the keyword and the document.
                                       scores=True, 
                                       #stop words
                                       additional_stopwords=custom_stop_words_s)

# no "s"  or "ing" end words
filtered_keywords = [(kw, score) for kw, score in extracted_keywords if not kw.endswith('s') and not kw.endswith('ing')]

# number of keywords (15)
filtered_keywords = filtered_keywords[:10]

# print
print("Filtered Extracted Keywords (Top 10):")
for kw, score in filtered_keywords:
    print(f"{kw}: {score}")

# creat 'summa_list' to including the result for later use
summa_list = [kw for kw, score in filtered_keywords]
```

    Filtered Extracted Keywords (Top 10):
    planned: 0.2899959537626859
    plan: 0.2899959537626859
    housing data: 0.22222526545957466
    space: 0.15200036162569006
    excel: 0.1340973732843077
    place: 0.13409737328430651
    permission: 0.13409737328430602
    application: 0.13376710876071438
    section: 0.1094423366358233
    sectional: 0.1094423366358233
    

##### **TF-IDF**

TF-IDF（Term Frequency - Inverse Document Frequency) 

The features are following:
1. **Term frequency** measures how often a word appears in a document.
Term Frequency (TF) is calculated as:

$$
\text{TF}(t, d) = \frac{\text{count of term } t \text{ in document } d}{\text{total number of terms in document } d}
$$

2. **Inverse document frequency** measures the rarity of a word in the entire collection of documents (corpus). If a word appears frequently in many documents, it is a common word and may not be important; if a word appears in only a few documents, it is more discriminative and may be more important.
Inverse Document Frequency (IDF) is calculated as:

$$
\text{IDF}(t) = \log \left( \frac{N}{\text{count of documents containing term } t} \right)
$$

Where:
- **N**: is the total number of documents.
- **Count of documents containing term**: is the number of documents in which the term \( t \) appears.

3. The combination of TF and IDF makes those words that appear frequently in documents but are relatively rare in the entire document collection considered as important keywords.


```python
# Add a collection of documents (corpus)
documents = [
    matthew_pullen_content,
    matt_newby_content,
    camelia_smith_content,
    megan_rourke_content
]

# Create a TF-IDF Vectorizer and use the custom stopwords list
tfidf_vectorizer = TfidfVectorizer(stop_words=custom_stop_words, ngram_range=(1, 2))

# Fit and transform the documents into a TF-IDF matrix
tfidf_matrix = tfidf_vectorizer.fit_transform(documents)

# Get the feature names (words)
words = tfidf_vectorizer.get_feature_names_out()

# Get the TF-IDF values for each word in the specific document (first document in the list)
tfidf_scores = tfidf_matrix[0].toarray().flatten()  # This retrieves the TF-IDF values for matthew_pullen_content

# Combine the words with their corresponding TF-IDF scores
word_scores = dict(zip(words, tfidf_scores))

# Sort the keywords by their TF-IDF scores in descending order
sorted_word_scores = sorted(word_scores.items(), key=lambda x: x[1], reverse=True)

# Print out the top 15 keywords
print("Top 10 keywords:")
for word, score in sorted_word_scores[:10]:
    print(f"{word}: {score}")

# Save the top 15 keywords in a list for later use
tfidf_list = [word for word, score in sorted_word_scores[:10]]
```

    Top 10 keywords:
    assumptions: 0.3324501160825692
    section: 0.16381718130209472
    permission: 0.145446925786124
    planning: 0.1301146965408906
    data: 0.11927180516248306
    106: 0.1146720269114663
    section 106: 0.1146720269114663
    system: 0.1146720269114663
    commercial: 0.09829030878125683
    commencement: 0.0831125290206423
    

### Evaluation with Rouge

In order to evaluate the quality of each keyword model, we need to set a gold standard mamually. They are:

| **Keyword**           | **Reason**                                                                                                 |
|-----------------------|------------------------------------------------------------------------------------------------------------|
| **housing data**       | Central of the discussion. Housing data is used for planning, forecasting, and decision-making processes.   |
| **planning**           | Refers to the housing planning process, including applications, approvals, and development stages.          |
| **section 106**        | Refers to legal agreements related to housing processes, important for financial and legal management.   |
| **commercial**         | Highlights the discussion on commercial developments and how they fit within mixed-use projects.            |
| **tenure mix**         | Discusses the variety and distribution of housing types, crucial for planning and resource allocation.      |
| **permission**         | Determining when housing projects can approval and commence.                  |
| **commencement**       | A key stage for the application process.                     |
| **CIL** | Important for calculating the financial contributions towards infrastructure in developments.|
| **forecasting**        | Discusses the process of predicting housing completions, which is key for long-term planning and prediction. |
| **infrastructure**     | Concerns the necessary services and structures (e.g., schools, parks) to support new housing developments.  |

Comparing the reference summary with the summaries produced by the six models.

#### **Code Tab**


```python
# Define the gold standard and models' outputs
gold_standard_keywords = {"housing data", "planning", "section 106", "commercial", 
                          "tenure mix", "permission", "commencement", "CIL", "forecasting", 
                          "infrastructure"}

model_outputs = {
    "Yake": {"assumptions", "planning", "section", "data", "permission", "system", 
             "housing", "planning system", "commercial", "applications"},
    "KeyBERT": {"commencement", "planning", "plans", "commence", "planned", "triggers", 
                "application", "assumptions", "agreements", "development"},
    "Summa": {"planned", "plan", "housing data", "space", "excel", "place", "permission", 
              "application", "section", "sectional"},
    "TF-IDF": {"assumptions", "section", "permission", "planning", "data", "106", 
               "system", "commercial", "commencement", "metre"},
    "Copilot": {"housing data", "trigger points", "pre-application", "section 106", "commencement", 
                "forecasting", "CIL income", "workload", "non-residential data", "student housing"},
    "Llama 3.2": {"infrastructure", "planning", "population", "projections", "technology", 
                  "data", "analysis", "development", "growth", "london"}
}

# Normalize and calculate metrics for each model
def normalize_and_metrics(models, gold_standard):
    results = []
    for model_name, keywords in models.items():
        # Normalize keywords
        normalized_keywords = set(k.split()[0].lower() for k in keywords)
        # Calculate intersection with gold standard
        intersection = gold_standard.intersection(normalized_keywords)
        # Calculate precision, recall, and F1 score
        precision = len(intersection) / len(normalized_keywords) if normalized_keywords else 0
        recall = len(intersection) / len(gold_standard) if gold_standard else 0
        f1 = 2 * (precision * recall) / (precision + recall) if (precision + recall) != 0 else 0
        results.append({
            "Model": model_name,
            "Precision": precision,
            "Recall": recall,
            "F1 Score": f1
        })
    return results

# Calculate and prepare results in a DataFrame
metrics_results = normalize_and_metrics(model_outputs, gold_standard_keywords)
results_df = pd.DataFrame(metrics_results)

# Display results
print("The results as following:")
results_df
```

    The results as following:
    




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Model</th>
      <th>Precision</th>
      <th>Recall</th>
      <th>F1 Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Yake</td>
      <td>0.333333</td>
      <td>0.3</td>
      <td>0.315789</td>
    </tr>
    <tr>
      <th>1</th>
      <td>KeyBERT</td>
      <td>0.200000</td>
      <td>0.2</td>
      <td>0.200000</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Summa</td>
      <td>0.100000</td>
      <td>0.1</td>
      <td>0.100000</td>
    </tr>
    <tr>
      <th>3</th>
      <td>TF-IDF</td>
      <td>0.400000</td>
      <td>0.4</td>
      <td>0.400000</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Copilot</td>
      <td>0.200000</td>
      <td>0.2</td>
      <td>0.200000</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Llama 3.2</td>
      <td>0.200000</td>
      <td>0.2</td>
      <td>0.200000</td>
    </tr>
  </tbody>
</table>
</div>



According to the results, the TF-IDF model achieved the highest score. The keyword extraction results by TF-IDF for the text content of the 12 participants are as follows:

| Name             | Top 10 TF-IDF Keywords                                         |
|------------------|----------------------------------------------------------------|
| Matthew Pullen   | assumptions, section, permission, planning, data, 106, system, commercial, commencement, metre |
| Matt Newby       | data, industrial, commercial, planning, component, economic, sub, live, slightly, plan |
| Camelia Smith    | terms, net, housing, planning, dwellings, see, been, section, types, data |
| Megan Rourke     | planning, gonna, great, lewisham, pre, 2024, click, constraints, presenting, website |
| Steven Heywood   | housing, delivery, delivered, data, past, similarly, uses, areas, borough, future |
| Hannah Horton    | construction, 106, section, infrastructure, team, data, commencement, details, interesting, major |
| Sam Happe        | information, order, developers, planning, directly, list, orders, numbering, development, street |
| Crissi Russo     | information, received, regeneration, similar, understand, perspective, additionality, expectation, handed, rps |
| Melissa Spearman | section, housing, information, 106, affordable, original, work, permission, given, getting |
| Chris Hancox     | information, add, commenced, system, cil, commencement, completion, control, data, 106 |
| Natalya Palit    | plan, helpful, enfield, local, around, terms, certainly, possible, questions, east |
| Paul Buckenham   | Planning, permission, Planning permission, housing, development, affordable housing, granted Planning permission, asking, issues, affordable |


According to the TF-IDF results, while it performed best in terms of Rouge scores, its ability to discern **bi-gram keywords was relatively weak**, even with a prompt specifically aimed at extracting bi-grams. To address this, the results from Copilot, which is more sensitive to bi-gram keywords, are included as a supplement. The results are as follows:

| Name             | Keywords                                                                                                                                                                  |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Matthew Pullen   | Housing data, Trigger points, Pre-application, Section 106, Commencement, Forecasting, CIL income, Workload, Non-residential data, Student housing                        |
| Matt Newby       | Plan Making, Authority monitoring reports, Corporate performance, Tenure, Accessibility, Starts, Completions, Approvals, Sub-area, Local plan                             |
| Megan Rourke     | Housing, Regional, Client-side, Dashboard, Site constraints, Planning, Targets, Unit numbers, Risks, Photographs                            |
| Camelia Smith    | Housing types, GLA dashboard, Student accommodation, Shelters, Housing blocks, Planning applications, Density, Unit mix, Feasibility studies, Justification                    |
| Steven Heywood   | Housing data, Planning policy, Housing delivery, Aggregate numbers, Completion data, Tenure, Annual monitoring report, Centralized system, Housing projections, Spatial visualization |
| Hannah Horton    | Development coordination, Construction phase, Commencement dates, Construction forums, Funding collection, Resource forecasting, Highways, Environmental health, Excel spreadsheet, Internal data |
| Sam Happe        | Forward planning, Projection figures, Property listing, Inland Revenue Valuation Office, Property banding, New homes bonus, Inspectors, Planning permissions, Commencement dates, Completion dates |
| Crissi Russo     | Planning approvals, Start dates, Delivery timelines, Registered Providers (RPs), Deeds of variation, Data accuracy, Discrepancies, Housing schemes, Building control, Housing association |
| Melissa Spearman | Section 106, Housing data, Commencements, Affordable housing, Building control, CIL commencement, Site visits, Data sources, Council collaboration, Housing team           |
| Chris Hancox     | Commencement notices, Levelling-up and Regeneration Act (LURA) 2023, Exocom, Affordable housing, Building control, Data accuracy, Data consistency, Standardized methodology, Single source of truth, Housing development |
| Natalya Palit    | Plan making team, Annual monitoring report, Housing supply, Local plans, Completions, Consents, Dwelling size mix, Tenure mix, MS Teams form, Sub-area data                |
| Paul Buckenham   | Affordable homes, Planning permission, Housing developments, Forecasting, Developers, Timelines, Data accuracy, Commencement notices, Building control, Standardized methodology |


It is important to note that although Copilot can generate bi-gram keywords, it also has clear disadvantages. Firstly, its Rouge scores are not particularly high, which means that its keyword accuracy is questionable. Secondly, it may generate non-existent keywords or miss important ones. Additionally, even when using the same prompt, its reproducibility is not high.

The keywords generated by the TF-IDF model and Copilot highlight several focal points of the meeting:

1. **Emphasis on Regulations and Stages**: Keywords such as "planning," "permit," and "Section 106" indicate that a significant part of the discussion revolved around regulatory compliance and planning permissions.
2. **Focus on Planning Processes**: Keywords like "application" and "commencement" suggest that the discussions likely involved the formal planning process.
3. **Data-Centric Approach**: Keywords such as "data," "Excel," and "assumptions" indicate that data processing, accuracy, and analysis were central themes. This likely reflects how data is currently used in planning and how it might be better utilised or managed in future workflows.
4. **Discussion on Current and Future Workflows**: Both sets of keywords reflect a focus on the current practices of managing authority, planning, and project initiation. Additionally, there is a discussion on how to optimize these processes or adapt them to meet future needs.

These results are helpful in determining the direction of future work to address the areas of concern identified by participants.

## Conclusion

**This report explores the potential of integrating language processing technologies into work practices, highlighting several significant point:**

### Achievement
1. **Performance of BART**: The BART model excels in extractive summarisation. For future work, the BART model can be directly employed to extract key sentences from texts, permitting easy viewing and referencing of the main original content.
2. **Capabilities of Copilot and Llama 3.2**: Both models are efficient at abstractive summarisation, with Copilot scoring highest for macro-level summaries. It also requires shorter prompts to complete summaries, facilitating quick comprehension of the entire text's gist. Llama 3.2 shows good summarisation abilities for specific examples. The choice of model can be tailored to specific work requirements.
3. **Keyword Extraction**: TF-IDF performs well with uni-gram words, while Copilot performs well in multi-gram words.

### Comprehensive insights
1. **Data Quality**: Attendees consistently valued the <u>coherence, real-time nature, reliability, and centralisation</u> of housing data. These factors are crucial for enhancing work efficiency and the accuracy of urban and regional planning decisions.
2. **Automation in Housing Digital Products**: There is a strong interest in future housing digital products having automated data collection and management features.
3. **Data Visualisation Platforms**: Data visualisation platforms represent a part of viable trend for the future digitalisation of housing.

### Future directions for language processing technology
1. **Innovation in Copilot and Llama 3.2**: These models, which continually evolve and integrate comprehensive language processing technologies (such as image-language processing), particularly Copilot, are expanding with diversity. As more applications incorporate Copilot, it may facilitate a <u>"Internet of Application"</u>, enhancing user experience with seamless and convenient integration. This is worth exploring for potential uses in housing and planning digital products.
2. **Validation with Rouge and SemScore**: The current validation results are based on reference summaries or keywords drafted by one individual. For greater accuracy, conducting future Rouge tests based on reference summaries and keywords provided by multiple individuals is necessary.
3. **Text Processing Considerations**: The texts used in this study were processed by collating statements from the same individual before evaluating them into the model, which might cause discrepancies between the model’s understanding of context and the actual context. Although no significant impact on abstractive summarisation has been observed to date, this requires attention in subsequent tests.


