import CurriculumList from '../components/organisms/CurriculumList'
import Layout from '../components/templates/Layout'
import LayoutResponsive from '../components/templates/LayoutResponsive'
import { CurriculumItem } from '../model/curriculum'

const IndexPage = () => {
  /* TODO SAMPLE Data */
  const dummyData: CurriculumItem[] = [
    {
      thumbnail: 'https://images.songc.io/preparing.png',
      title: '웹페이지의 구조(뼈대)를 잡는 HTML',
      description:
        'HTML은 우리가 보고 있는 대부분의 웹페이지를 구성하는 골격이 됩니다. 텍스트, 이미지 등 웹페이지에 담길 정보를 표현할 때 사용 됩니다.',
    },
    {
      thumbnail: 'https://images.songc.io/preparing.png',
      title: '웹페이지의 구조(뼈대)를 잡는 HTML',
      description:
        'CSS(Cascading Style Sheets)는 HTML 문서를 꾸밀 때 사용 됩니다. 글자의 크기, 글자체, 줄간격, 배경색, 배열 등 문서의 스타일을 입힐 때 사용 됩니다.',
    },
    {
      thumbnail: 'https://images.songc.io/preparing.png',
      title: '웹페이지의 구조(뼈대)를 잡는 HTML',
      description:
        'CSS(Cascading Style Sheets)는 HTML 문서를 꾸밀 때 사용 됩니다. 글자의 크기, 글자체, 줄간격, 배경색, 배열 등 문서의 스타일을 입힐 때 사용 됩니다.',
    },
    {
      thumbnail: 'https://images.songc.io/preparing.png',
      title: '웹페이지의 구조(뼈대)를 잡는 HTML',
      description:
        'CSS(Cascading Style Sheets)는 HTML 문서를 꾸밀 때 사용 됩니다. 글자의 크기, 글자체, 줄간격, 배경색, 배열 등 문서의 스타일을 입힐 때 사용 됩니다.',
    },
    {
      thumbnail: 'https://images.songc.io/preparing.png',
      title: '웹페이지의 구조(뼈대)를 잡는 HTML',
      description:
        'HTML은 우리가 보고 있는 대부분의 웹페이지를 구성하는 골격이 됩니다. 텍스트, 이미지 등 웹페이지에 담길 정보를 표현할 때 사용 됩니다.',
    },
    {
      thumbnail: 'https://images.songc.io/preparing.png',
      title: '웹페이지의 구조(뼈대)를 잡는 HTML',
      description:
        'CSS(Cascading Style Sheets)는 HTML 문서를 꾸밀 때 사용 됩니다. 글자의 크기, 글자체, 줄간격, 배경색, 배열 등 문서의 스타일을 입힐 때 사용 됩니다.',
    },
    {
      thumbnail: 'https://images.songc.io/preparing.png',
      title: '웹페이지의 구조(뼈대)를 잡는 HTML',
      description:
        'CSS(Cascading Style Sheets)는 HTML 문서를 꾸밀 때 사용 됩니다. 글자의 크기, 글자체, 줄간격, 배경색, 배열 등 문서의 스타일을 입힐 때 사용 됩니다.',
    },
    {
      thumbnail: 'https://images.songc.io/preparing.png',
      title: '웹페이지의 구조(뼈대)를 잡는 HTML',
      description:
        'CSS(Cascading Style Sheets)는 HTML 문서를 꾸밀 때 사용 됩니다. 글자의 크기, 글자체, 줄간격, 배경색, 배열 등 문서의 스타일을 입힐 때 사용 됩니다.',
    },
    {
      thumbnail: 'https://images.songc.io/preparing.png',
      title: '웹페이지의 구조(뼈대)를 잡는 HTML',
      description:
        'HTML은 우리가 보고 있는 대부분의 웹페이지를 구성하는 골격이 됩니다. 텍스트, 이미지 등 웹페이지에 담길 정보를 표현할 때 사용 됩니다.',
    },
    {
      thumbnail: 'https://images.songc.io/preparing.png',
      title: '웹페이지의 구조(뼈대)를 잡는 HTML',
      description:
        'CSS(Cascading Style Sheets)는 HTML 문서를 꾸밀 때 사용 됩니다. 글자의 크기, 글자체, 줄간격, 배경색, 배열 등 문서의 스타일을 입힐 때 사용 됩니다.',
    },
  ]

  return (
    <LayoutResponsive>
      <Layout hasHeader>
        <Layout.Main>
          <CurriculumList curriculums={dummyData} />
        </Layout.Main>
      </Layout>
    </LayoutResponsive>
  )
}

export default IndexPage
