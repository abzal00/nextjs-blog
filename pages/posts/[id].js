import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utilit.module.css"

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    return <Layout>
        <Head>

            <title>{postData.titile}</title>


        </Head>
        <article>
            <h1 className={utilStyles.headinXl}>{postData.titile}</h1>
            <div className={utilStyles.lighText}>
        <Date dateString={postData.date} />
        
        
        {/* {postData.id}
        <br />
        {postData.date} / where this code */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>
}