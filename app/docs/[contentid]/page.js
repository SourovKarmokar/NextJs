import { getDocumentById } from "@/lib/doc";
import { notFound } from "next/navigation";

const ContentPage = async ({ params }) => {
  const { contentid } = await params;

  let doc;
  try {
    doc = await getDocumentById(contentid);
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

export default ContentPage ;