//  tests for code in the sharp.ts file
import { resize } from '../routers/api/sharp';

describe('Testing image processing', () => {
  it('sending a message with unvalid name', async () => {
    await expectAsync(resize('alaska', 200, 200)).toBeRejected();
  });
  it('sending a message with unvalid height', async () => {
    await expectAsync(resize('alaska', -200, 200)).toBeRejected();
  });
  it('sending a message with unvalid width', async () => {
    await expectAsync(resize('alaska', 200, -200)).toBeRejected();
  });

  it('Resolves succesfully when providing the right name, height and width parameters', async () => {
    await expectAsync(resize('palmtunnel', 200, 200)).toBeResolved();
  });
});
