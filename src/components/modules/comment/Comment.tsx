

 interface CommentProps {
  username: string;
  body: string;
  date?: string;
  _id: string;
}

  

const Comment = ({ username, body, date }: CommentProps) => {
  return (
    <section className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 font-shabnam">
      {/* آواتار */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-lg font-bold">
        {username.charAt(0).toUpperCase()}
      </div>

      {/* محتویات کامنت */}
      <div className="flex-1 bg-white shadow-md rounded-xl p-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <strong className="text-base sm:text-lg text-gray-800">{username}</strong>
          <span className="text-xs sm:text-sm text-gray-500">
            {date ? new Date(date).toLocaleDateString("fa-IR") : ""}
          </span>
        </div>

        <p className="mt-2 text-sm sm:text-base text-gray-700">{body}</p>

        {/* ستاره‌ها (مثال، اگر score اضافه شود) */}
        {/* <div className="mt-2 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
        </div> */}
      </div>
    </section>
  );
};



export default Comment;
