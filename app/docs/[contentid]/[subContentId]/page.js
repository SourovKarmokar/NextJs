import { getDocumentById } from "@/lib/doc";
import { notFound } from "next/navigation";

const SubContentPage = async ({ params }) => {
  const { subContentId } = await params; 

  let doc;
  try {
    doc = await getDocumentById(subContentId);
  } catch (e) {
    notFound();
  }

  return (
    <>
      <h1>{doc.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: doc.content }} />
    </>
  );
};

export default SubContentPage ;