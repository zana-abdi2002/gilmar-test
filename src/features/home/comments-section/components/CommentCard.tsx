type Props = {
  comment: string;
  fullName: string;
  role: "guest" | "owner";
};

function CommentCard() {
  return (
    <div className="flex flex-col gap-4">
      {/* quote icon */}
      {/* comment */}
      {/* name and role */}
      <div className="flex flex-col gap-2"></div>
    </div>
  );
}

export default CommentCard;
