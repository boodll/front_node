const fs = require('fs')
const crypto = require('crypto')

// 3. 데이터 읽기 및 aes-256-cbc 알고리즘으로 암호화
let data = '';
readStream.on('data', (chunk) => {
  data += chunk;
});

readStream.on('end', () => {
  // 4. 암호화에 필요한 key, iv는 시스템 변수로부터 획득
  const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex'); // 키는 32바이트
  const iv = Buffer.from(process.env.ENCRYPTION_IV, 'hex'); // IV는 16바이트

  // 5. 암호화된 문자열을 quiz-chipher.txt에 쓰기 (createWriteStream 이용)
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  const encryptedData = Buffer.concat([cipher.update(data, 'utf-8'), cipher.final()]);

  const writeStream = fs.createWriteStream('quiz-chipher.txt');
  writeStream.write(encryptedData);
  writeStream.end();

  writeStream.on('finish', () => {
    console.log('암호화가 완료되어 quiz-chipher.txt에 저장되었습니다.');
  });
});

// 에러 처리
readStream.on('error', (err) => {
  console.error('파일 읽기 중 오류가 발생했습니다:', err);
});

writeStream.on('error', (err) => {
  console.error('파일 쓰기 중 오류가 발생했습니다:', err);
});