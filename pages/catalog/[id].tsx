import { useRouter } from "next/router";

const CatalogDetail = ()=>{
    const router = useRouter();
    const id = router.query.id
    return(
            <h1 className="title">Detail page: {id}</h1>
    )
}

export default CatalogDetail;