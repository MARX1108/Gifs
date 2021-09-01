# How data is collected?
refer to tcollect.ipynb
additional reference: https://github.com/twintproject/twint.git

randomly pick a time every hour to sample 100 or less tweets that contains .gif
use twint library
twint search setting: 
`
c = twint.Config()
c.Search = ".gif"
c.Limit = "100"
c.Pandas = True
c.Lang = "en"
c.Store_csv = True
`

# How are data preprocessed?
refer to data_preprocess.ipynb
additional reference: https://github.com/ssut/py-googletrans

1. Remove the first 100 repetitive data
2. Extract only the data that are in English using googletrans
3. Count Number of New and Reply
4. Count the distribution of tweets length
5. 