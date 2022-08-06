const number = Number(prompt('참가 인원이 몇 명인가요?'));
if (number > 0) {
  const $button = document.querySelector('button');
  const $input = document.querySelector('input');
  const $word = document.querySelector('#word');
  const $order = document.querySelector('#order');

  let word;
  let newWord;

  const OnClickBtn = (e) => {
    if (newWord.length === 3) {
      if (!word || word[word.length - 1] === newWord[0]) {
        word = newWord;
        $word.textContent = word;

        const order = Number($order.textContent);

        if (order >= number) {
          $order.textContent = 1;
        } else {
          $order.textContent = order + 1;
        }
      } else {
        alert('다시 입력해주세요');
      }
    } else {
      alert('3글자로 입력해주세요');
    }
    $input.value = '';
    $input.focus();
  };

  const onInput = (e) => {
    newWord = e.target.value;
  };

  $button.addEventListener('click', OnClickBtn);
  $input.addEventListener('input', onInput);
} else {
  alert('새로고침 후 다시 시작해주세요.');
}
