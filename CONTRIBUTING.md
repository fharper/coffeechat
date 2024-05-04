# Contributing

First, let me thank you personally for offering free coffee chats to the tech community. It is an amazing way to give back, and let's be honest, you'll get as much out of these than the person scheduling a chat with you.

## Add yourself to this list

Only add yourself to this list! This is not a list to promote your paid services. It is free as in beer...

To add your name to this list, you need to add another object to the `people` array in [people.json](https://github.com/fharper/coffeechat/blob/main/people.json) and send a pull request. See [schema.json](schema.json) for the information about the JSON schema. If the schema property isn't an array like `languages` or `topics`, please add only one item (ex.: you have multiple jobs, please choose only one to add). If a property is not required, and you don't have anything to add for it, just don't add it, not even empty (ex.: you don't have a website, since it's not a require field, don't add an empty string or with "N/A" in it.)

Note that your commit need to be signed to ensure the authenticity of the person adding information here: more information on how to do that in the [GitHub documentation](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits).

## Remove yourself from this list

Simply create a pull request by removing your people definition from [people.json](https://github.com/fharper/coffeechat/blob/main/people.json).
