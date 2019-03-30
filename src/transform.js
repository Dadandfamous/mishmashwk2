function groupAdultsByAgeRange(group) {

  // filters out all < 18
  const allAdults = group
    .filter(people => people.age >= 18)

  const adultGrouping = allAdults
    .reduce((group, current) => {
      if (current.age <= 20) {
        // only contains non-empty groups
        if (group['20 and younger'] === undefined) {
          group['20 and younger'] = []
        }
        group['20 and younger'].push(current)

      } else if (current.age <= 30) {
        if (group['21-30'] === undefined) {
          group['21-30'] = []
        }
        group['21-30'].push(current)

      } else if (current.age <= 40) {
        if (group['31-40'] === undefined) {
          group['31-40'] = []
        }
        group['31-40'].push(current)
      } else if (current.age <= 50) {
        if (group['41-50'] === undefined) {
          group['41-50'] = []
        }
        group['41-50'].push(current)
      } else {
        if (group['51 and older'] === undefined) {
          group['51 and older'] = []
        }
        group['51 and older'].push(current)
      }
      return group
    }, {})
  return adultGrouping
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange