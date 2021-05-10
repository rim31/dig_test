import { ILogin } from './interfaces'

/**
 * check login ( email and password)
 * it should be from a database
 * it should also limit the amout of the attemps
 * @param data 
 * @returns boolean
 */
export default function checkData(data: ILogin) {
  if (data.email !== "" && data.password !== "")
    return true;
  return false;
}