import { Card, Col, Modal, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import API from '../config/api'

function ArticleCard() {

    const title = "News Api";
    document.title = title;
    
    const [detail, setDetail] = useState("");
    const [open, setOpen] = useState(false)
 
    const search = "apple"
    const release = "2023-01-23"
    const sortBy = "popularity"
    const apiKey = "566f41ce3a1647f29927c3e579b19e36"

    const { data : articles, isLoading} = useQuery("articleChace", async () => {
        try {
          const response = await API.get(`/everything?q=${search}&from=${release}&to=${release}&sortBy=${sortBy}&apiKey=${apiKey}`)
          return response.data.articles;
      } catch (error) {
          console.log(error)
      }
    })

    interface Article {
      title: string,
      publishedAt: string,
      author: string,
      url: string,
      urlToImage: string,
      description: string
      content: string
    }    
    
    const handleModal = () => {
      setOpen(false);
      setDetail("");
    }
    
    useEffect(()=> {
      if(detail !== "") {
        return setOpen(true)
      }
    }, [detail])

  return (
  ( isLoading ? 
  <Meta title="Loading..." style={{textAlign: 'center', marginTop: "50vh", fontSize: 30, fontWeight: 300}} />
    : 
  <div className="site-card-wrapper" style={{ margin: 60 }}>
    <Row gutter={16}>
      {articles?.map((article: Article, index: number) => (
      <Col key={index} span={8}>
        <Card.Grid key={index} style={{textAlign: 'justify'}} onClick={()=> setDetail(article?.content)}>
         <Card hoverable style={{marginBottom: 30}} cover={<img alt={article?.author} style={{height: 240, objectFit: 'cover' }} src={article?.urlToImage} />} >
          <Meta title={article?.title}/>
          <Meta title={new Date(article?.publishedAt).toLocaleString()} />
          <a href={article?.url} target="_blank">{article?.url}</a>
          <Meta title={article?.author} description={article?.description}/>
          </Card>
        </Card.Grid>
      </Col>
  ))}
  </Row>
    <Modal centered open={open} onOk={handleModal} onCancel={handleModal} width={500}>
      <p style={{paddingTop: 30}}>{detail}</p>
    </Modal>
  </div>
  ))
  
}

export default ArticleCard