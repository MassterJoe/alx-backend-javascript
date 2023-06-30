export default function guardrail(mathFunction) {
  const queue = [];
  const x = 'Guardrail was processed';
  try {
    const value = mathFunction();

    queue.push(value);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push(x);
  }
  return queue;
}
