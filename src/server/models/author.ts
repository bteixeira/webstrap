import * as glue from '../glue'
import * as Sequelize from 'sequelize'

export interface AuthorAttributes {name: string}
export type AuthorInstance = Sequelize.Instance<AuthorAttributes> & AuthorAttributes;

const Author = glue.sequelize.define<AuthorInstance, AuthorAttributes>('Author', {
	name: Sequelize.STRING,
})

Author.associate = function (models) {
	// associations can be defined here
}

export default Author
