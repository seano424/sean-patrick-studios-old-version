function Photography() {
  return (
    <div className="grid grid-cols-5 gap-1">
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <img
            className="w-80 h-80"
            src="https://images.unsplash.com/photo-1487766036723-04aebf785670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="fake images"
          />
        ))}
    </div>
  )
}

export default Photography
