const CoursePage = ({
  params,
}: {
  params: {
    courseId: string[];
  };
}) => {
  console.log(params.courseId[0]);

  return (
    <>
      <div>Course Page</div>
    </>
  );
};

export default CoursePage;
