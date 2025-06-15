const input = document.querySelector("input");

const decoder = new TextDecoder("utf-8");

input.addEventListener("change", async () => {
  const file = input.files[0];
  // const text = await file.text();
  // console.log(text);
  const readStream = file.stream();
  // const reader = readStream.getReader();

  // const result1 = await reader.read();
  // console.log(result1);
  // const result2 = await reader.read();
  // console.log(result2);
  // const result3 = await reader.read();
  // console.log(result3);
  // const result4 = await reader.read();
  // console.log(result4);
  // const result5 = await reader.read();
  // console.log(result5);

  // let isComplete = false;
  // let values = "";
  // while (!isComplete) {
  //   const result = await reader.read();
  //   if (!result.done) {
  //     values += decoder.decode(result.value);
  //   }
  //   isComplete = result.done;
  //   console.log(result);
  // }
  // console.log(values);
  // console.log(isComplete);

  // for await (const chunk of readStream) {
  //   console.log(chunk); 
  // }
});
