import dayjs from 'dayjs'
import RelativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(RelativeTime)

export function fromNow(date: Date) {
  return dayjs(date).fromNow()
}
